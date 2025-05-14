import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with the API key
const API_KEY = 'AIzaSyBif5c4kQOeJKpo-aRNQva86h1ldss_ggE';
const genAI = new GoogleGenerativeAI(API_KEY);

// Health context to guide the model's responses
const HEALTH_CONTEXT = `
You are AUROBOT, a personalized health and wellness assistant.
Provide helpful, accurate, and concise advice on health and wellness topics.
Be supportive, empathetic, and motivational in your responses.
Avoid giving medical diagnoses or prescribing treatments.
Always encourage users to consult healthcare professionals for specific medical concerns.
Focus on evidence-based information and best practices.
Keep responses direct, helpful, and conversational.
`;

// Initialize the chat
export const initializeChat = async () => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Initialize as a health and wellness assistant named AUROBOT" }],
        },
        {
          role: "model",
          parts: [{ text: "I'm AUROBOT, your personal health and wellness assistant. How can I help you today?" }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1000,
      },
    });
    
    return chat;
  } catch (error) {
    console.error("Error initializing chat:", error);
    throw error;
  }
};

// Send a message to the Gemini model
export const sendMessageToGemini = async (content: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `${HEALTH_CONTEXT}\n\nUser: ${content}\n\nAUROBOT:`;
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};