import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

// Ensure that the API key is retrieved correctly from the environment variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY is not defined");
}

const genAI = new GoogleGenerativeAI(apiKey);

// Define the type for the model
const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
