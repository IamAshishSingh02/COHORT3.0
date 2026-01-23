import {
  LayoutGrid,
  BookOpen,
  Link,
  FileText,
  Mic,
  Video,
  X,
  LogOut
} from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  activeType: string | null;
  onSelectType: (type: string | null) => void;
}

const Sidebar = ({ activeType, onSelectType }: SidebarProps) => {
  const logout = useAuthStore(s => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const items = [
    { label: "All", type: null, icon: <LayoutGrid size={18} /> },
    { label: "Notes", type: "note", icon: <BookOpen size={18} /> },
    { label: "Links", type: "link", icon: <Link size={18} /> },
    { label: "Tweets", type: "tweet", icon: <X size={18} /> },
    { label: "Videos", type: "video", icon: <Video size={18} /> },
    { label: "Documents", type: "document", icon: <FileText size={18} /> },
    { label: "Audio", type: "audio", icon: <Mic size={18} /> }
  ];

  return (
    <aside className="w-64 border-r bg-white p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-6">Brainly</h2>

      <nav className="space-y-1 flex-1">
        {items.map(item => {
          const isActive = activeType === item.type;

          return (
            <button
              key={item.label}
              onClick={() => onSelectType(item.type)}
              className={`flex items-center gap-3 w-full rounded-lg px-3 py-2 text-sm cursor-pointer
                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
      >
        <LogOut size={16} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
