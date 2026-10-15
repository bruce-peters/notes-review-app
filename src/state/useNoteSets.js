import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";

const useNoteSets = () => {
  const user = useAuth();
  const [noteSets, setNoteSets] = useState([]);
  const uid = user?.currentUser?.uid;

  // Fetch once per signed-in user, and clear the list when the user changes
  useEffect(() => {
    setNoteSets([]);
    if (!uid) {
      return;
    }

    let ignore = false;
    const fetchNoteSets = async () => {
      try {
        const noteSetRef = collection(db, `users/${uid}/note-sets`);
        const querySnapshot = await getDocs(noteSetRef);
        const noteSetsData = [];
        querySnapshot.forEach((doc) => {
          noteSetsData.push({ ...doc.data(), noteSetId: doc.id });
        });
        if (!ignore) {
          setNoteSets(noteSetsData);
        }
      } catch (error) {
        console.log("Error fetching note sets:", error);
      }
    };

    fetchNoteSets();
    // Drop the result if the user changed while the fetch was in flight
    return () => {
      ignore = true;
    };
  }, [uid]);

  return noteSets;
};

export default useNoteSets;
