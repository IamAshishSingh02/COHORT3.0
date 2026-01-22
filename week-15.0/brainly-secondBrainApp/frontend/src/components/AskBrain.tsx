import { useState } from "react";
import { askBrainApi } from "@/services/ai.api";

interface Source {
  title: string;
  score: number;
}

const AskBrain = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);
      setError("");
      setAnswer("");
      setSources([]);

      const res = await askBrainApi(question);

      setAnswer(res.data.answer);
      setSources(res.data.sources || []);
    } catch (err) {
      console.error(err);
      setError("Failed to get answer from your brain");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white space-y-4">
      <h2 className="text-lg font-semibold">Ask Your Brain 🧠</h2>

      <textarea
        className="w-full border rounded px-3 py-2 min-h-20"
        placeholder="Ask a question based on your saved content..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {answer && (
        <div className="mt-4 space-y-3">
          <div>
            <h3 className="font-medium">Answer</h3>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {answer}
            </p>
          </div>

          {sources.length > 0 && (
            <div>
              <h4 className="font-medium text-sm mb-1">Sources</h4>
              <ul className="text-sm text-gray-600 list-disc ml-5">
                {sources.map((s, idx) => (
                  <li key={idx}>
                    {s.title} ({s.score.toFixed(2)})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AskBrain;
