import { openai } from "./openai.client"

const MAX_TOKENS = 5000
const MAX_CHARS = MAX_TOKENS * 4

function limitInput(text: string){
  return text.slice(0, MAX_CHARS)
}

export const createEmbedding = async (text: string): Promise<number[]> => {
  const safeText = limitInput(text)

  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: safeText
  })

  return response.data[0].embedding
}
