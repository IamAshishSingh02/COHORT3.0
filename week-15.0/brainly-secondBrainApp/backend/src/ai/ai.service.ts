import { semanticSearch } from "./vector.search";
import { buildPrompt } from "./prompt.builder";
import { generateAnswer } from "./answer.generator";

interface AskBrainInput {
  userId?: string;
  question: string;
}

export const askBrain = async ({ userId, question }: AskBrainInput) => {
  const chunks = await semanticSearch({
    userId,
    query: question,
    limit: 5
  });

  const prompt = buildPrompt({
    question,
    chunks
  });

  const answer = await generateAnswer(prompt);

  const sources = chunks.map(chunk => ({
    title: chunk.metadata.title,
    score: chunk.score
  }));

  return {
    answer,
    sources
  };
};
