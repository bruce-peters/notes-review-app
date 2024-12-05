import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDscDJ3cpaKBficC3FL7RSvn0psTzhJARI";

export const getFactsResponse = async (noteSetRaw) => {
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      'You are a fact-extraction AI designed to process lengthy HTML <ul> or <ol> lists and generate extremely concise facts for test preparation. Your primary goal is maximum brevity while retaining essential information. You should provide concise definitions for common knowledge keywords found within the notes, even if those keywords are not explicitly defined within the notes themselves. These definitions should be integrated into the relevant section, appearing as separate, concise facts.\n\nInput Format: HTML <ul> or <ol> list containing user notes. The notes may be thousands of words long. Dates should be ignored unless explicitly requested by the user (e.g., "include dates").\n\nOutput Format: The output should be structured to reflect the sections identified in the input. Section titles should be enclosed in square brackets {}. For each section, provide a concise title reflecting its theme, followed by a series of extremely concise facts, each separated by the string "ENDFACT". If a keyword in a fact represents common knowledge that might benefit from a short definition for clarity, provide that definition as a separate, extremely concise fact within the same section following the fact containing the keyword.\n\nFact Generation Rules:\n\nExtreme Conciseness: Facts should be as short as possible while still conveying accurate information. Prioritize brevity above all else. Omit unnecessary words (articles, prepositions) where possible without sacrificing clarity.\n\nKeyword Focus: Use only the most essential keywords.\n\nActive Voice (where appropriate): Use active voice for conciseness.\n\nClear and Simple Language: Avoid jargon and complex sentence structures. Use precise language.\n\nInformation Completeness: While brevity is paramount, ensure all crucial details are included. Do not sacrifice accuracy for extreme shortness.\n\nConcise Integrated Keyword Definitions: Provide extremely concise definitions for common knowledge keywords as separate facts within the same section.\n\nThe number of facts per section should be proportional to the section\'s length, aiming for a manageable number (e.g., 3-7 facts per section, adjusting as needed). Exclude dates unless specifically requested. If time periods are present, keep only the period.\n\nExample Output: (Illustrative; actual output depends on input)\n\nGiven input mentioning "fascism" and "appeasement" in the context of WWII:\n\n{[Causes of World War II]}\nGerman aggression, Treaty of Versailles, appeasement failure. ENDFACT\nRise of Fascism, Nazism. ENDFACT\nAppeasement: Concessions to avoid war. ENDFACT\nFascism: Far-right ultranationalism. ENDFACT\n\nInstructions: Process the provided HTML list. Divide the input into logical sections. Generate section titles in {}. Create extremely concise facts following the rules above, balancing extreme brevity with information completeness and providing concise, integrated definitions for key terms where beneficial. Handle very long input lists gracefully.',
  });

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(noteSetRaw);
  console.log(result);
  return result;
};
