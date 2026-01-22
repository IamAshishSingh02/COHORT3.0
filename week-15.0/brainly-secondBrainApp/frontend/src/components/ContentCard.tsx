import { Trash2 } from "lucide-react";

export interface Content {
  _id: string;
  title: string;
  type: string;
  content: string;
  tags: string[];
  createdAt: string;
}

interface ContentCardProps {
  content: Content;
  onDelete?: (id: string) => void;
}

const ContentCard = ({ content, onDelete }: ContentCardProps) => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm space-y-2">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{content.title}</h3>

        {onDelete && (
          <button
            onClick={() => onDelete(content._id)}
            className="text-gray-400 hover:text-red-500 cursor-pointer"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>

      <p className="text-sm text-gray-600 line-clamp-3">
        {content.content}
      </p>

      {content.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentCard;
