import React, { useEffect, useRef, useState } from "react";
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
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
const debugResponse = async (dummy) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return "{[European Centrality and Eurocentrism]} Europe's prominent role in world history is highlighted by the \"European Moment,\" coinciding with the start of the Anthropocene. ENDFACT Eurocentrism, evident in flat maps placing Europe at the center, influenced the perception of other regions as defined by their distance from Europe. ENDFACT The belief that non-European societies should imitate Western models fueled a sense of European exceptionalism, despite other civilizations having experienced similar periods of dominance. ENDFACT Examples of non-European periods of significant influence include the Arab world (600-1000), China (1000-1500), the Mongols (1200-1350), and the Aztec and Inca civilizations (15th century). ENDFACT   {[Atlantic Revolutions in a Global Context]} The late 18th and early 19th centuries witnessed widespread instability, including the collapse of the Safavid dynasty, fragmentation of the Mughal Empire, and uprisings in Russia and China. ENDFACT The interconnected Atlantic revolutions (American, French, Haitian, and Latin American) shared Enlightenment ideals such as liberty, equality, and popular sovereignty. ENDFACT These revolutions introduced republican government ideas to the Atlantic world, while monarchies persisted elsewhere due to limited influence of republican thought. ENDFACT The revolutions generated debates about liberty, equality, and the extent of freedoms, primarily benefiting white, propertied men. ENDFACT   {[The French Revolution]} The French Revolution, sparked by economic crisis and social inequality, involved conflicts within French society. ENDFACT Key events included the formation of the National Assembly, the Declaration of the Rights of Man and Citizen, and the execution of Louis XVI and Marie Antoinette. ENDFACT The Reign of Terror, led by Robespierre, resulted in mass executions, followed by efforts to create a new society with a new calendar and administrative system. ENDFACT The revolution's emphasis on social equality, coupled with the creation of a large army through the levee en masse, influenced gender roles and led to debates regarding female political equality. ENDFACT Napoleon Bonaparte's rise to power marked a shift towards a military dictatorship, yet preserved many revolutionary principles while spreading French influence across Europe. ENDFACT   {[The Haitian Revolution]} The Haitian Revolution, on the formerly French colony of Saint-Domingue, involved a complex interplay between slaves, white colonists, and free people of color. ENDFACT Led by Toussaint Louverture, the successful slave revolt resulted in the establishment of an independent republic, Haiti, and the abolition of slavery. ENDFACT The revolution's impact included the destruction of the plantation system, redistribution of land, and the creation of a nation of small-scale farmers. ENDFACT The Haitian Revolution faced significant challenges, including a forced independence debt from France and the limitations of freedom for all, inspiring other slave rebellions and contributing to the abolitionist movement.  ENDFACT The revolution's legacy includes the term “Remember Haiti,” used to deter similar outcomes through cautious approaches to political change, especially in Latin America. ENDFACT   {[Latin American Revolutions]} Latin American revolutions, fueled by resentment towards Spanish rule and Enlightenment ideals, initially involved scattered protests. ENDFACT Napoleon's invasion of Spain and Portugal weakened royal authority, contributing to the independence movements. ENDFACT These revolutions, lasting almost twice as long as those in North America, were characterized by class, racial, and religious divisions. ENDFACT Key figures like Miguel Hidalgo and José Morelos led peasant uprisings in Mexico, while Túpac Amaru's rebellion highlighted indigenous resistance. ENDFACT The concept of \"Americanos\" fostered a sense of shared identity against those born outside the Americas, although divisions persisted. ENDFACT   {[Echoes of Revolution]} The Atlantic revolutions had lasting global effects, including Britain's increased focus on Asia and the modernization of Egypt and the Ottoman Empire. ENDFACT The spread of republicanism, social equality, and national liberation fueled numerous European revolutions and the rise of universal male suffrage by 1914. ENDFACT Three major movements—abolitionism, nationalism, and feminism—emerged with significant global impact. ENDFACT   {[Abolition of Slavery]} Arguments for abolition included secular (violating natural rights), religious (repugnant to religious ideals), economic (not essential for economic progress), and political (Haitian Revolution's impact) reasons. ENDFACT The abolitionist movement, particularly strong in Britain, employed various techniques such as petitions, lawsuits, and boycotts. ENDFACT Britain's abolition of slavery in its empire, followed by other nations, led to the end of Atlantic slavery by the 1880s (Brazil being the last). ENDFACT The lives of former slaves did not automatically improve, with challenges like sharecropping in the Southern United States and continued racial inequality. ENDFACT The end of slavery led to global migration, with indentured servants filling labor demands in various regions. ENDFACT   {[Nations and Nationalism]} The concept of the \"nation,\" encompassing shared culture, territory, and a desire for self-governance, emerged during the era of revolutions. ENDFACT Napoleon's conquests fostered a sense of national identity among those resisting French rule. ENDFACT Nationalism, facilitated by modern transformations in Europe, inspired unification movements in Italy and Germany, independence movements, and fueled rivalries. ENDFACT Governments promoted national loyalty through various means, including education and public rituals. ENDFACT Different forms of nationalism emerged, including civic nationalism (assimilation) and ethnic nationalism (shared ancestry). ENDFACT   {[Feminist Beginnings]} Feminism's rise in the 1800s was linked to the French Revolution, Enlightenment ideals, and women's participation in revolutionary movements. ENDFACT Mary Wollstonecraft's \"Vindication of the Rights of Woman\" was an early feminist text, and women gained more opportunities for education and activism. ENDFACT The Women's Rights Convention in Seneca Falls (1848) marked a significant milestone, and feminism became a transatlantic movement. ENDFACT Key concerns included access to education and professions, with radical feminists challenging societal norms. ENDFACT The suffrage movement gained momentum by the 1870s, involving diverse groups of women and employing various protest methods. ENDFACT   {[Achievements and Limitations of Feminism]} Feminism's achievements included increased access to education, professional opportunities (though limited), and changes in property and divorce laws. ENDFACT The suffrage movement saw gradual successes, with New Zealand leading the way and the US achieving it after WWI. ENDFACT Discussions about women's roles in society, including challenges to traditional family structures, homosexuality, and birth control, generated debates and divisions within the feminist movement. ENDFACT Opposition to feminism included concerns about its potential impact on reproduction and national population, alongside accusations of selfishness. ENDFACT Feminism spread beyond North America and Western Europe, although with varying degrees of success and facing diverse challenges in different contexts. ENDFACT   {[Kartini: Feminism and Nationalism in Java]} Kartini opposed the subordination of women under Dutch rule and championed European education. ENDFACT She became a symbol of both feminist and nationalist thought in Indonesia. ENDFACT ";
};

const EditNoteSet = () => {
  const { noteSetId } = useParams();
  const [generatingNoteFacts, setGeneratingNoteFacts] = useState(false);
  const user = useAuth();
  const [notesData, setNotesData, saveNoteSetData, deleteNoteSet] =
    useNoteSet(noteSetId);
  const noteSetRawRef = useRef(null);
  const noteSetNameRef = useRef(null);
  const [noteSetFacts, setNoteSetFacts] = useState([
    { sectionName: "", sectionContent: [""] },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    if (notesData) {
      noteSetNameRef.current.value = notesData.noteSetName || "";
      noteSetRawRef.current.innerHTML = notesData.noteSetRaw || "";
      setNoteSetFacts(notesData.noteSetFacts || []);
    }
  }, [notesData]);

  const stripHtml = (html) => {
    // Remove all tags except ul, ol, li
    html = html.replace(/<\/?(?!ul|ol|li)\w+[^>]*>/g, "");

    // Remove all attributes from remaining tags
    return html.replace(/<(\w+)[^>]*>/g, "<$1>");
  };

  const handleSave = async () => {
    await saveNoteSetData({
      ...notesData,
      noteSetRaw: noteSetRawRef.current.innerHTML,
      noteSetName: noteSetNameRef.current.value,
      noteSetFacts: noteSetFacts,
    });
    navigate(`/type/${noteSetId}`);
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
    await getFactsResponse(stripHtml(noteSetRawRef.current.innerHTML)).then(
      async (results) => {
        let responseText = results.response.candidates[0].content.parts[0].text;
        // let responseText = results;
        responseText = responseText.replace(/\n/g, " "); // Replace all line breaks with spaces
        responseText = responseText.replace(/\*/g, ""); // Replace all asterisks with nothing
        console.log("Response Text", responseText);

        const noteFacts = [];
        const sections = responseText.split(/\{\[(.*?)\]\}/); // Split by section headers

        for (let i = 1; i < sections.length; i += 2) {
          const sectionName = sections[i].trim();
          const sectionContent = sections[i + 1]
            .split("ENDFACT")
            .map((fact) => fact.trim())
            .filter((fact) => fact.length > 0);

          noteFacts.push({ sectionName, sectionContent });
        }

        setNoteSetFacts(noteFacts);
        console.log("Note Facts", noteFacts);
      }
    );
    setGeneratingNoteFacts(false);

    console.log("Ended generating");
  };

  //dont display anything if we don't of the set
  if (!notesData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col align-center text-center gap-4">
      <Link
        to="/"
        className="self-start m-2 p-2 bg-primary text-white rounded-md hover:scale-105 hover:shadow-lg transition-all"
      >
        Back
      </Link>
      {/* Generating Notes Overlay */}
      {generatingNoteFacts && (
        <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 flex flex-col justify-center align-middle">
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
      <div className="text-3xl mt-8 font-bold text-slate-400">
        Edit {notesData.noteSetName ?? ""}
      </div>
      <div className="text-lg mb-8 text-slate-400">
        Name your notes, paste your notes into the Raw Notes Section, then
        generate your notes set.
        <br />
        Make sure to <strong>save your data</strong>, it won't autosave
      </div>
      {/* Raw Notes Editor */}
      <div className="bg-secondary flex flex-col align-center p-2 gap-4 w-[90%] mx-auto rounded-md shadow-md">
        {/* Name */}
        <h2 className="text-xl font-bold">Note Set Name</h2>
        <input
          className="w-[90%] mx-auto rounded-md"
          ref={noteSetNameRef}
        ></input>
        <h2 className="text-xl font-bold">
          Raw Notes
          <h3 className="text-md font-normal">
            Paste your notes here. You can copy from google docs, or any other
            note taking platform
          </h3>
        </h2>
        <div
          className="w-[90%] mx-auto rounded-md max-h-80 overflow-scroll bg-white text-left"
          ref={noteSetRawRef}
          contentEditable={true}
        ></div>
      </div>
      {/* Generate Raw Notes */}
      <button
        className="bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all"
        onClick={generateNoteFacts}
      >
        Generate Note Facts
      </button>
      {/* NoteSetFacts */}
      {noteSetFacts.length !== 0 && (
        <div className="bg-secondary flex flex-col w-[80%] mx-auto p-5 gap-2 rounded-md">
          <div className="text-2xl font-bold">Note Facts</div>
          {Array.isArray(noteSetFacts) ? (
            noteSetFacts.map(({ sectionName, sectionContent }, index) => {
              console.log(sectionName, sectionContent);
              return (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="text-xl font-bold">{sectionName}</div>
                  {sectionContent.map((value, idx) => (
                    <div
                      key={idx}
                      className="bg-white mx-auto p-1 rounded-md shadow-md"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              );
            })
          ) : (
            <div>Outdated Note Set</div>
          )}
        </div>
      )}
      {/* Save Note Set Data */}
      <button
        className="bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all"
        onClick={handleSave}
      >
        Save Note Set Data
      </button>
      {/* Delete Note Set*/}
      <button
        className="bg-red-600 text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all"
        onClick={() => {
          if (confirm("Are you sure you want to delete this note set?")) {
            deleteNoteSet();
          }
        }}
      >
        Delete Note Set
      </button>
    </div>
  );
};

export default EditNoteSet;
