import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

const debugNoteSet = {
  noteSetName: "Debug Notes",
  noteSetId: "debug-notes",
  noteSetRaw: "This is a raw noteset with random words and facts inside of it",
  noteSetFacts: [],
};

const useNoteSet = (noteSetId) => {
  const user = useAuth();
  const [noteSetData, setNoteSetData] = useState(null);
  const navigate = useNavigate();

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
  const saveNoteSetData = async (newNoteSetData) => {
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
              noteSetName: newNoteSetData.noteSetName,
              noteSetId: newNoteSetData.noteSetId,
              noteSetRaw: newNoteSetData.noteSetRaw,
              noteSetFacts: newNoteSetData.noteSetFacts,
            },
            { merge: true }
          );
        } else {
          // Document does not exist, create a new one
          await setDoc(noteSetRef, {
            noteSetName: newNoteSetData.noteSetName,
            noteSetId: newNoteSetData.noteSetId,
            noteSetRaw: newNoteSetData.noteSetRaw,
            noteSetFacts: newNoteSetData.noteSetFacts,
          });
        }
      }
      alert("User data saved successfully");
    } catch (error) {
      alert("Error saving user data");
      console.log(error);
    }
  };

  const deleteNoteSet = async () => {
    try {
      if (user && user.currentUser) {
        const noteSetRef = doc(
          db,
          `users/${user.currentUser.uid}/note-sets/${noteSetId}`
        );
        await deleteDoc(noteSetRef);
        navigate("/");
      }
    } catch (error) {
      alert("Error deleting note set");
      console.log(error);
    }
  };

  return [noteSetData, setNoteSetData, saveNoteSetData, deleteNoteSet];
};

export default useNoteSet;
