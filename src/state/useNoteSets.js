import { useState } from "react";
import { useAuth } from "./AuthContext";
import { collection, getDoc, getDocs } from "@firebase/firestore";
import { db } from "../firebase";

const useNoteSets = () => {
  const user = useAuth();
  const [noteSets, setNoteSets] = useState([]);
  if (noteSets.length === 0) {
    try {
      if (user && user.currentUser) {
        const noteSetRef = collection(
          db,
          `users/${user.currentUser.uid}/note-sets`
        );
        getDocs(noteSetRef).then((querySnapshot) => {
          const noteSetsData = [];
          querySnapshot.forEach((doc) => {
            noteSetsData.push({ ...doc.data(), noteSetId: doc.id });
          });
          setNoteSets(noteSetsData);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return noteSets;
};

export default useNoteSets;
