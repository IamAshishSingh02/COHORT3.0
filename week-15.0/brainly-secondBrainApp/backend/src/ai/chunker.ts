export const chunkText = (text: string, maxLength = 500): string[] => {
  const chunks: string[] = []

  let start = 0

  while(start < text.length){
    let end = start + maxLength;

    if(end < text.length){
      const lastPeriod = text.lastIndexOf(".", end)
      if(lastPeriod > start){
        end = lastPeriod + 1
      }
    }

    const chunk = text.slice(start, end).trim()
    if(chunk){
      chunks.push(chunk)
    }

    start = end
  }

  return chunks
}
