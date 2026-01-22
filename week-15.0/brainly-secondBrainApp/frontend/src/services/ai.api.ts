import api from "./api";

export const askBrainApi = (question: string) => {
  return api.post("/ai/ask", { question });
};
