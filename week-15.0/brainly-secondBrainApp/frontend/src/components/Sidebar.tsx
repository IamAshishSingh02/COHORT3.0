import { BookOpen, Link, FileText, Mic, Video, X, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 border-r bg-white p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-6">
        Brainly
      </h2>

      <nav className="space-y-2 text-sm flex-1">
        <SidebarItem icon={<BookOpen size={18} />} label="Notes" />
        <SidebarItem icon={<Link size={18} />} label="Links" />
        <SidebarItem icon={<X size={18} />} label="Tweets" />
        <SidebarItem icon={<Video size={18} />} label="Videos" />
        <SidebarItem icon={<FileText size={18} />} label="Documents" />
        <SidebarItem icon={<Mic size={18} />} label="Audio" />
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

const SidebarItem = ({
  icon,
  label
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
