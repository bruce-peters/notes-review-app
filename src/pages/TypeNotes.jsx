import React, { useEffect, useState } from "react";
import DisplayText from "../components/DisplayText";
import Keyboard from "../components/Keyboard";
import { useAuth } from "../state/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import useNoteSet from "../state/useNoteSet";
import { useParams } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const TypeNotes = () => {
  const { noteSetId } = useParams();
  const [targetText, setTargetText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [notesData, setNotesData] = useNoteSet(noteSetId);
  const user = useAuth();
  const [factsList, setFactsList] = useState([{ fact: "", timesTyped: 0 }]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const text =
    "No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry. Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. Pretend am earnest offered arrived company so on. Felicity informed yet had admitted strictly how you. Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities.";

  // When the page is loaded, add an event listener for the keydown event
  useEffect(() => {
    // Create an event listener for the keydown event
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // When the notesData changes, shuffle the facts and set the first fact as the target text
  useEffect(() => {
    if (notesData && notesData.noteSetFacts.length > 0) {
      console.log("Shuffling facts");
      const newFactsList = shuffleArray(notesData.noteSetFacts).map((fact) => {
        return {
          fact,
          timesTyped: 0,
        };
      });
      console.log(newFactsList, currentFactIndex);
      setFactsList(newFactsList);
    }
  }, [notesData]);

  // When the currentFactIndex or factsList changes, set the target text to the current fact
  useEffect(() => {
    if (notesData && factsList) {
      const newTargetText = factsList[currentFactIndex].fact;
      setTargetText(newTargetText);
    }
  }, [currentFactIndex, factsList]);

  // Algorithm for handling user input
  const handleKeyDown = (e) => {
    //Check if the key pressed is a letter or typeable character
    const isTypeable = e.key.length === 1;
    console.log(e.key, isTypeable);
    switch (e.key) {
      case "Enter":
        handleNextFact();
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
    console.log("Finished typing");
    console.log(factsList, currentFactIndex);
    setUserInput("");
    if (factsList[currentFactIndex].timesTyped < 5) {
      setFactsList((prev) => {
        console.log("Prev fact list", prev);
        let newFactsList = [...prev];
        newFactsList[currentFactIndex].timesTyped++;
        console.log("New fact list", newFactsList);
        return newFactsList;
      });
    } else {
      setCurrentFactIndex((prev) => {
        // if (currentFactIndex === factsList.length - 1) {
        //   return 0;
        // }
        return prev + 1;
      });
    }
  };

  const hasFinishedTyping = () => {
    return (
      targetText !== "" &&
      targetText.split(" ").length === userInput.split(" ").length
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
    <div className="relative bg-slate-800 h-screen p-5 overflow-hidden flex flex-col justify-between">
      {notesData ? (
        <>
          <div>{factsList[currentFactIndex].timesTyped}</div>
          <DisplayText
            text={getCurrentDisplayedText(userInput)}
            cursorLocation={getTypingCursorLocation(userInput)}
          />
          <Keyboard highlightedKeys={[]} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TypeNotes;
