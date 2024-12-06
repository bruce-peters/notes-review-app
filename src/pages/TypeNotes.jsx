import React, { useEffect, useState } from "react";
import DisplayText from "../components/DisplayText";
import Keyboard from "../components/Keyboard";
import { useAuth } from "../state/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import useNoteSet from "../state/useNoteSet";
import { Link, useParams } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const fillerWords = [
  "a",
  "an",
  "the",
  "and",
  "but",
  "or",
  "nor",
  "for",
  "so",
  "yet",
  "after",
  "although",
  "as",
  "because",
  "before",
  "even",
  "if",
  "in",
  "once",
  "since",
  "though",
  "unless",
  "until",
  "when",
  "where",
  "while",
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "among",
  "around",
  "at",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "between",
  "beyond",
  "by",
  "despite",
  "down",
  "during",
  "except",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "like",
  "near",
  "of",
  "off",
  "on",
  "onto",
  "out",
  "outside",
  "over",
  "past",
  "since",
  "through",
  "throughout",
  "to",
  "toward",
  "under",
  "underneath",
  "until",
  "up",
  "upon",
  "with",
  "within",
  "without",
];

const TypeNotes = () => {
  const { noteSetId } = useParams();
  const [targetText, setTargetText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [notesData, setNotesData] = useNoteSet(noteSetId);
  const [factsList, setFactsList] = useState([
    { sectionName: "", sectionContent: [""] },
  ]);
  const [sectionName, setSectionName] = useState("");
  const user = useAuth();
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [currentFactIteration, setCurrentFactIteration] = useState(1);
  const [settings, setSettings] = useState({
    repetitions: 5,
    casing: true,
    punctuation: true,
    omitFillerWords: false,
  });
  const [pressedKey, setPressedKey] = useState(null);

  // When the page is loaded, add an event listener for the keydown event
  useEffect(() => {
    // Create an event listener for the keydown event
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //when the page is loaded, create an event listener for the keyup event
  useEffect(() => {
    const handleKeyUp = () => setPressedKey(null);
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {
    // make facts list a set of facts and sections
    if (notesData) {
      const factsArray = [];
      notesData.noteSetFacts.forEach(({ sectionName, sectionContent }) => {
        sectionContent.forEach((fact) => {
          factsArray.push([sectionName, fact]);
        });
      });
      setFactsList(factsArray);
    }
  }, [notesData]);

  // When the currentFactIndex or factsList changes, set the target text to the current fact
  useEffect(() => {
    if (notesData) {
      let newTargetText = factsList[currentFactIndex][1];
      if (!settings.casing) {
        newTargetText = newTargetText.toLowerCase();
      }
      if (!settings.punctuation) {
        newTargetText = newTargetText.replace(/[^a-zA-Z0-9\s]/g, "");
      }
      if (settings.omitFillerWords) {
        newTargetText = newTargetText
          .split(" ")
          .filter((word) => !fillerWords.includes(word.toLowerCase()))
          .join(" ");
      }
      setTargetText(newTargetText);
      setSectionName(factsList[currentFactIndex][0]);
    }
  }, [
    currentFactIndex,
    factsList,
    settings.casing,
    settings.punctuation,
    settings.omitFillerWords,
  ]);

  useEffect(() => {
    if (
      settings.repetitions !== "" &&
      currentFactIteration > settings.repetitions
    ) {
      handleNextFact();
    }
  }, [currentFactIteration, settings.repetitions]);

  // Algorithm for handling user input
  const handleKeyDown = (e) => {
    //Check if the key pressed is a letter or typeable character
    const isTypeable = e.key.length === 1;
    setPressedKey(e.key);
    switch (e.key) {
      case "Enter":
        if (e.ctrlKey) {
          console.log("CTRL ENTER");
          handleNextFact();
        } else {
          setCurrentFactIteration((prev) => prev + 1);
        }
        // Clear the user input
        setUserInput("");
        break;
      case "Backspace":
        // check if it's a ctrl-backspace
        if (e.ctrlKey) {
          setUserInput((prev) => {
            console.log("CTRL BACKSPACE");
            const words = prev.split(" ");
            words.pop();
            return words.join(" ");
          });
        }
        // Delete the last character from the userInput state
        setUserInput((prev) => {
          return prev.slice(0, -1);
        });
        break;
      default:
        if (!isTypeable) return; // Ignore non-typeable characters

        // Add the typed character to the userInput state
        setUserInput((prev) => {
          return prev + e.key;
        });
        break;
    }
  };

  const handleNextFact = () => {
    setCurrentFactIndex((prevIndex) => prevIndex + 1);
    setCurrentFactIteration(1);
  };

  const handleSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const hasFinishedTyping = () => {
    return (
      targetText !== "" &&
      targetText.split(" ").length - 2 < userInput.split(" ").length
    );
  };

  const getCurrentDisplayedText = (currentInput) => {
    // should return list [[{value:LETTER, status:(INCORRECT|CORRECT|UNTYPED|EXTRA)}]] - EXTRA is all of the unnecesairy charectars at the end of the word
    const typedWords = userInput.split(" "); // all words that the user has typed
    const targetWords = targetText.split(" "); // all words that the user needs to type

    const returnedWords = [];

    for (let wordIndex = 0; wordIndex < targetWords.length; wordIndex++) {
      // loop through all of our target words
      const letterData = []; // generate empty data array for out letters

      for (
        let letterIndex = 0;
        letterIndex < targetWords[wordIndex].length;
        letterIndex++
      ) {
        // loop through all of the letters in the target world
        let letterStatus = "INCORRECT"; //check for letter status
        if (
          wordIndex >= typedWords.length ||
          !typedWords[wordIndex] ||
          letterIndex >= typedWords[wordIndex].length
        ) {
          letterStatus = "UNTYPED";
        } else if (
          typedWords[wordIndex][letterIndex] ===
          targetWords[wordIndex][letterIndex]
        ) {
          letterStatus = "CORRECT";
        }
        // figure out the letter value
        const value = targetWords[wordIndex][letterIndex];
        letterData.push({
          value,
          status: letterStatus,
        });
      }

      // add any extra inputted words to the end of it
      if (
        typedWords[wordIndex] &&
        typedWords[wordIndex].length > targetWords[wordIndex].length
      ) {
        const extraLetters = typedWords[wordIndex].substring(
          targetWords[wordIndex].length
        );
        for (const letter in extraLetters) {
          letterData.push({
            value: extraLetters[letter],
            status: "EXTRA",
          });
        }
      }

      returnedWords.push(letterData);
    }
    return returnedWords;
  };

  //returns array - first number is the word index, second number is the letter currently typing
  const getTypingCursorLocation = (currentInput) => {
    const typedWords = userInput.split(" "); // all words that the user has typed
    const targetWords = targetText.split(" "); // all words that the user needs to type

    const currentWordIndex = typedWords.length - 1;
    const currentLetterIndex = typedWords[currentWordIndex].length;

    return [currentWordIndex, currentLetterIndex];
  };

  return (
    <div className="relative bg-slate-800 h-screen p-5 overflow-hidden flex flex-col gap-10">
      {notesData ? (
        <>
          <Link
            to="/"
            className="absolute top-2 left-2 m-2 p-2 bg-primary text-white rounded-md hover:scale-105 hover:shadow-lg transition-all"
          >
            Back
          </Link>
          <div className="absolute top-2 right-4 text-4xl text-blue-400 font-bold">
            {currentFactIteration}
          </div>
          <div className="self-center text-primary text-3xl">{sectionName}</div>
          {/* Settings */}
          <div className="self-center flex flex-row gap-2">
            {[
              {
                name: "repetitions",
                label: "Repetitions",
                type: "number",
                className: "w-16",
              },
              { name: "casing", label: "Casing", type: "checkbox" },
              { name: "punctuation", label: "Punctuation", type: "checkbox" },
              {
                name: "omitFillerWords",
                label: "Omit Filler Words",
                type: "checkbox",
              },
            ].map(({ name, label, type, className }) => (
              <label
                key={name}
                className={`flex items-center gap-2 ${
                  type === "checkbox" && settings[name]
                    ? "bg-slate-500"
                    : "bg-slate-600"
                } p-1 rounded-md select-none`}
              >
                {label}
                <input
                  className={`bg-slate-800 text-primary p-1 rounded-md ${
                    className || ""
                  } ${type === "checkbox" && "hidden"}`}
                  type={type}
                  name={name}
                  value={type === "checkbox" ? undefined : settings[name]}
                  checked={type === "checkbox" ? settings[name] : undefined}
                  onChange={handleSettingsChange}
                />
              </label>
            ))}
          </div>
          <div className="flex-grow flex items-center">
            <DisplayText
              text={getCurrentDisplayedText(userInput)}
              cursorLocation={getTypingCursorLocation(userInput)}
            />
          </div>
          <Keyboard pressedKey={pressedKey} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TypeNotes;
