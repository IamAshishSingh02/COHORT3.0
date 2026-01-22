import { Trash2 } from "lucide-react";

interface ContentCardProps {
  title: string;
  content: string;
  tags: string[];
  onDelete: () => void;
}

const ContentCard = ({ title, content, tags, onDelete }: ContentCardProps) => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{title}</h3>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500 cursor-pointer"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <p className="text-sm text-gray-600 line-clamp-3">
        {content}
      </p>

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContentCard;
