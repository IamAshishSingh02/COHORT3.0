import { Trash2, Link2, FileText, Mic } from "lucide-react";

export interface Content {
  _id: string;
  title: string;
  type: "note" | "link" | "tweet" | "video" | "document" | "audio";
  content: string;
  tags: string[];
  createdAt: string;
}

interface ContentCardProps {
  content: Content;
  onDelete?: (id: string) => void;
  onTagClick?: (tag: string) => void;
}

const ContentCard = ({ content, onDelete, onTagClick }: ContentCardProps) => {
  const renderByType = () => {
    switch (content.type) {
      case "note":
        return (
          <p className="text-sm text-gray-700 line-clamp-4">
            {content.content}
          </p>
        );

      case "link":
        return (
          <a
            href={content.content}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline break-all"
          >
            <Link2 size={16} />
            {content.content}
          </a>
        );

      case "video":
        return (
          <div className="aspect-video rounded overflow-hidden">
            <iframe
              src={toYoutubeEmbed(content.content)}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        );

      case "tweet":
        return (
          <div className="border rounded p-2 text-sm text-gray-700 italic">
            {content.content}
          </div>
        );

      case "document":
        return (
          <div className="flex items-center gap-2 text-gray-700">
            <FileText size={16} />
            <span className="truncate">{content.content}</span>
          </div>
        );

      case "audio":
        return (
          <div className="flex items-center gap-2 text-gray-700">
            <Mic size={16} />
            <span className="truncate">{content.content}</span>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm space-y-3">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{content.title}</h3>

        {onDelete && (
          <button
            onClick={() => onDelete(content._id)}
            className="text-gray-400 hover:text-red-500 cursor-pointer"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>

      {/* Body */}
      {renderByType()}

      {/* Tags */}
      {content.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {content.tags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagClick?.(tag)}
              className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentCard;

/* helper */
function toYoutubeEmbed(url: string) {
  if (url.includes("embed")) return url;

  const match = url.match(/v=([^&]+)/);
  return match
    ? `https://www.youtube.com/embed/${match[1]}`
    : url;
}
