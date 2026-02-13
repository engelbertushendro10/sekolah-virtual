
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const askStudyAssistant = async (subject: string, question: string) => {
  if (!API_KEY) return "API Key is missing. Please configure it.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an AI Study Assistant for the subject of ${subject}. A student asks: ${question}. Provide a concise, helpful, and encouraging explanation in Indonesian.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, asisten belajar sedang tidak tersedia. Silakan coba lagi nanti.";
  }
};

export const getReportSummary = async (subjects: any[]) => {
  if (!API_KEY) return "Configure API Key to get AI insights.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const dataStr = subjects.map(s => `${s.name}: ${s.finalScore} (${s.grade})`).join(", ");
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on these grades: ${dataStr}. Provide a very short encouraging summary and 2 specific tips to improve in Indonesian.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    return "Terus semangat belajar untuk hasil yang lebih baik!";
  }
};
