interface PromptInput {
  question: string;
  chunks: {
    text: string;
    metadata: {
      title: string;
      type: string;
    };
  }[];
}

export const buildPrompt = ({ question, chunks }: PromptInput) => {
  const context = chunks
    .map(
      (chunk, index) =>
        `Source ${index + 1} (${chunk.metadata.title}):\n${chunk.text}`
    )
    .join("\n\n");

  return `
You are an assistant answering questions using the user's personal knowledge base.

RULES:
- Use ONLY the information from the sources below
- If the answer is not present, say "I don't have enough information"
- Be concise and accurate
- Do NOT invent facts

SOURCES:
${context}

QUESTION:
${question}

ANSWER:
`;
};
