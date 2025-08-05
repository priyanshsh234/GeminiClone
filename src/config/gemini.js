




import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCalsCg6WFSRAO1A3Yi9sfND339_m_9G8U" });

async function run(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:prompt,
  });
  console.log(response.text);
  return response.text;
}

export default run;