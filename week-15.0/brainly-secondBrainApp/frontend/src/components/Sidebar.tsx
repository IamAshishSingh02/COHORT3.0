import { BookOpen, Link, FileText, Mic } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <h2 className="text-lg font-semibold mb-6">
        Brainly
      </h2>

      <nav className="space-y-2 text-sm">
        <SidebarItem icon={<BookOpen size={18} />} label="Notes" />
        <SidebarItem icon={<Link size={18} />} label="Links" />
        <SidebarItem icon={<FileText size={18} />} label="Documents" />
        <SidebarItem icon={<Mic size={18} />} label="Audio" />
      </nav>
    </aside>
  )
}

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
)

export default Sidebar
