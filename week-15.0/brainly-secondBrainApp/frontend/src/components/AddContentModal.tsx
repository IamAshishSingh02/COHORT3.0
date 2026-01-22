import { useState } from "react";
import { createContentApi } from "@/services/content.api";

interface AddContentModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const CONTENT_TYPES = [
  "note",
  "link",
  "tweet",
  "video",
  "document",
  "audio"
] as const;

const AddContentModal = ({ onClose, onSuccess }: AddContentModalProps) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<typeof CONTENT_TYPES[number]>("note");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !content) return;

    try {
      setLoading(true);

      await createContentApi({
        title,
        type,
        content,
        tags: tags
          .split(",")
          .map(t => t.trim())
          .filter(Boolean)
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to create content", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold">Add Content</h2>

        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <select
          className="w-full border rounded px-3 py-2"
          value={type}
          onChange={e => setType(e.target.value as any)}
        >
          {CONTENT_TYPES.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <textarea
          className="w-full border rounded px-3 py-2 min-h-30"
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-black text-white rounded text-sm disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContentModal;
