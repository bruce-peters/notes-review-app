import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const debugNoteSet = {
  noteSetName: "Debug Notes",
  noteSetId: "debug-notes",
  noteSetRaw: "This is a raw noteset with random words and facts inside of it",
  noteSetFacts: [],
};

const useNoteSet = (noteSetId) => {
  const user = useAuth();
  const [noteSetData, setNoteSetData] = useState(null);

  // Fetching the data
  useEffect(() => {
    const fetchNoteSetData = async () => {
      console.log("Fetching Note Set Data");
      try {
        if (user && user.currentUser) {
          const noteSetRef = doc(
            db,
            `users/${user.currentUser.uid}/note-sets`,
            noteSetId
          );
          const docSnapshot = await getDoc(noteSetRef);

          if (docSnapshot.exists()) {
            console.log("Document data:", docSnapshot.data());
            setNoteSetData({ ...docSnapshot.data(), noteSetId });
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("User not logged in or user.currentUser is null");
        }
      } catch (error) {
        console.log("Error fetching document:", error);
      }
    };

    if (user && user.currentUser && noteSetId) {
      fetchNoteSetData();
    }
  }, [user, noteSetId]);

  //Saving the data
  const handleNoteSetDataSaved = async () => {
    console.log("Saving Note Set Data");
    try {
      if (user && user.currentUser) {
        const noteSetRef = doc(
          db,
          `users/${user.currentUser.uid}/note-sets`,
          noteSetId
        );
        const docSnapshot = await getDoc(noteSetRef);

        if (docSnapshot.exists()) {
          // Document exists, update it
          await setDoc(
            noteSetRef,
            {
              noteSetName: noteSetData.noteSetName,
              noteSetId: noteSetData.noteSetId,
              noteSetRaw: noteSetData.noteSetRaw,
              noteSetFacts: noteSetData.noteSetFacts,
            },
            { merge: true }
          );
        } else {
          // Document does not exist, create a new one
          await setDoc(noteSetRef, {
            noteSetName: noteSetData.noteSetName,
            noteSetId: noteSetData.noteSetId,
            noteSetRaw: noteSetData.noteSetRaw,
            noteSetFacts: noteSetData.noteSetFacts,
          });
        }
      }
      alert("User data saved successfully");
    } catch (error) {
      alert("Error saving user data");
      console.log(error);
    }
  };

  return [noteSetData, setNoteSetData, handleNoteSetDataSaved];
};

export const useNoteSets = () => {
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

export default useNoteSet;
