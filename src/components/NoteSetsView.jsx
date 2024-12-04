import { Container } from "postcss";
import React from "react";
import NoteSetCard from "./NoteSetCard";

//creating the note set
const createNewNoteSet = async (noteSetName) => {
  console.log("Creating new note set");
  try {
    if (user && user.currentUser) {
      const noteSetRef = collection(
        db,
        `users/${user.currentUser.uid}/note-sets`
      );
      // Document does not exist, create a new one
      const newDocRef = doc(noteSetRef);
      await setDoc(newDocRef, {
        noteSetName: noteSetName,
        noteSetRaw: "",
        noteSetFacts: [],
      });
    }
  } catch (error) {
    alert("Error creating note set");
    console.log(error);
  }
};

const NoteSetsView = ({ noteSets }) => {
  return (
    <div className="bg-secondary-light min-w-fit max-w-20 m-auto p-8 rounded-lg shadow-md">
      <div className="text-2xl font-bold">Note Sets</div>
      <div className="flex flex-row flex-wrap mt-4 gap-4">
        {noteSets.map((noteSet, index) => {
          return <NoteSetCard key={index} noteSet={noteSet} />;
        })}
      </div>
      <button className="bg-primary-light text-xl w-fit m-auto p-2 rounded-md shadow-md mt-4 hover:scale-105 hover:cursor-pointer transition-transform">
        <span className="text-2xl m-1 font-extrabold">+</span>Create New
      </button>
    </div>
  );
};

export default NoteSetsView;
