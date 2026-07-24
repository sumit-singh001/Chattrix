import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: 'AIzaSyCkZDTT-eU3IUmpLk2FLpUtTbHnZsmHloc' });


export async function generateContent(prompt) {
  const result = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    systemInstruction: "You are a Ai helper for chattrix a social App for language exchange.Your core mission is to help users navigate the app and support their language learning journey through human connection.Help users connect by understanding their partner search criteria.Provide micro-tools like quick translations, word definitions, and basic phrases to assist ongoing conversations between users.Generate ideas for conversation topics and questions to help break the ice.",
    contents: prompt,
  });
  return result.text;
}


