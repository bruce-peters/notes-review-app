import React, { useEffect, useState } from "react";
import { getFactsResponse } from "../api";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../state/AuthContext";
import useNoteSet from "../state/useNoteSet";

const EditNoteSet = () => {
  const [generatingNoteFacts, setGeneratingNoteFacts] = useState(false);
  const user = useAuth();
  const [notesData, setNotesData, handleNoteSetDataSaved] = useNoteSet(
    window.location.pathname.split("/edit/").pop()
  );

  const onNoteSetRawChanged = (e) => {
    if (notesData) {
      const newNoteSetRaw = e.target.value;
      setNotesData({ ...notesData, noteSetRaw: newNoteSetRaw });
      console.log(notesData, newNoteSetRaw);
    }
  };

  const debugResponse = async (dummy) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return "The French society experienced violence between Catholics and Huguenots. \n ENDFACT\nThe Thirty Years' War lasted from 1618 to 1648.\nENDFACT\nThe Thirty Years' War was a Catholic-Protestant war.\nENDFACT\nThe Thirty Years' War affected most of Europe.\nENDFACT\nThe Thirty Years' War killed 15-30% of the German population.\nENDFACT\nThe Peace of Westphalia ended the Thirty Years' War in 1648.\nENDFACT\nThe Peace of Westphalia established the sovereignty of each state in controlling its religious affairs.\nENDFACT\nThe Thirty Years' War ended because all participants were significantly weakened.\nENDFACT\nThe Treaty of Westphalia influenced European politics.\nENDFACT\nEuropean politics became increasingly secular after the Treaty of Westphalia.\nENDFACT\nThe Treaty of Westphalia led to an agreement to separate church and state.\nENDFACT\nMinority Christians could practice their faith privately and at specific times publicly after the Treaty of Westphalia.\nENDFACT\nThe Treaty of Westphalia marked a time when leaders largely accepted religion as a private matter.\nENDFACT\nMost European leaders agreed to not interfere with religious practices after the Treaty of Westphalia.\nENDFACT\nThe Treaty of Westphalia recognized the sovereignty of a territory's secular ruler.\nENDFACT\nChurches continued to exist but were separated from ruling power after the Treaty of Westphalia.\nENDFACT \nSovereignty is the power or right to rule. \n ENDFACT \nHuguenots were French Protestants. \n ENDFACT \n The Peace of Westphalia was a significant treaty that ended the Thirty Years' War and impacted the relationship between church and state in Europe.";
  };

  const generateNoteFacts = async () => {
    if (notesData.noteSetFacts.length > 0) {
      // Ask the user if they want to proceed
      const userConfirmed = confirm(
        "You already have note facts. Regenerating will delete the ones you already have. Do you want to proceed with generating note facts?"
      );

      // If the user cancels, exit the function
      if (!userConfirmed) {
        console.log("User canceled the operation");
        return;
      }
    }

    console.log("started generating");
    setGeneratingNoteFacts(true);
    await getFactsResponse(notesData.noteSetRaw).then((results) => {
      let responseText = results.response.candidates[0].content.parts[0].text;
      // let responseText = results;
      responseText = responseText.replace(/\n/g, " "); // Replace all line breaks with spaces
      responseText = responseText.replace(/\*/g, ""); // Replace all line breaks with spaces
      const noteFacts = responseText
        .split("ENDFACT")
        .map((fact) => fact.trim()); // Trim spaces from each fact
      setNotesData({ ...notesData, noteSetFacts: noteFacts });
      console.log("Note Facts", noteFacts, notesData.noteSetRaw);
    });
    setGeneratingNoteFacts(false);
    console.log("Ended generating");
  };

  //dont display anything if we don't of the set
  if (!notesData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col align-center text-center gap-4">
      {/* Generating Notes Overlay */}
      {generatingNoteFacts && (
        <div className="absolute w-screen h-screen bg-slate-900 bg-opacity-50 flex flex-col justify-center align-middle">
          <div className="text-white text-2xl font-bold bg-slate-600 mx-auto p-3 rounded-md flex flex-row gap-2">
            <div>Generating Note Facts</div>
            <svg
              className="animate-spin h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}
      {/* Title */}
      <div className="text-3xl m-8 font-bold">
        Edit {notesData.noteSetName ?? ""}
      </div>
      {/* Raw Notes Editor */}
      <div className="bg-secondary flex flex-col align-center p-2 gap-4 w-[90%] mx-auto rounded-md shadow-md">
        <h2 className="text-xl font-bold">Raw Notes</h2>
        <textarea
          className="w-[90%] mx-auto rounded-md h-80"
          onChange={onNoteSetRawChanged}
        >
          {notesData.noteSetRaw}
        </textarea>
      </div>
      {/* Generate Raw Notes */}
      <button
        className="bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all"
        onClick={generateNoteFacts}
      >
        Generate Note Facts
      </button>
      {/* NoteSetFacts */}
      {notesData.noteSetFacts.length !== 0 && (
        <div className="bg-secondary flex flex-col w-[80%] mx-auto p-5 gap-2 rounded-md">
          <div className="text-2xl font-bold">Note Facts</div>
          {notesData.noteSetFacts.map((value, index) => (
            <div className="bg-white mx-auto p-1 rounded-md shadow-md">
              {value}
            </div>
          ))}
        </div>
      )}
      {/* Save Note Set Data */}
      <button
        className="bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all"
        onClick={handleNoteSetDataSaved}
      >
        Save Note Set Data
      </button>
    </div>
  );
};

export default EditNoteSet;
