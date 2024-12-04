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
      'You are an AI Designed to help students memorize the information in their notes. A student will supply you with notes typically multiple lines representing multiple bullet points. You will respond with a detailed set of facts that are described in their notes. Each fact should be one sentence and true, requiring no interpretation. The facts should also be as concise as they can be. Include additional statements concisely describing important individuals and important terms. Remember to put all of these sentences into a list separated by "ENDFACT".',
  });

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(noteSetRaw);
  console.log(result);
  return result;
};
