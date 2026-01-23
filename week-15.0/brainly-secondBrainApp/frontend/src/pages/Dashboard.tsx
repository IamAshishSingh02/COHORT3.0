import { useEffect, useState } from "react";
import { fetchContentApi, deleteContentApi } from "@/services/content.api";
import ContentCard from "@/components/ContentCard";
import type{ Content } from "@/components/ContentCard";
import Sidebar from "@/components/Sidebar";
import FullPageLoader from "@/components/FullPageLoader";
import AddContentModal from "@/components/AddContentModal";
import BrainSection from "@/components/BrainSection";
import { X } from "lucide-react";

const Dashboard = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);

  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchContents = async (initial = false) => {
    try {
      initial ? setInitialLoading(true) : setSearchLoading(true);

      const res = await fetchContentApi({
        type: activeType ?? undefined,
        tag: activeTag ?? undefined,
        search: debouncedSearch || undefined
      });

      setContents(res.data.contents);
    } catch (error) {
      console.error("Fetch failed", error);
    } finally {
      setInitialLoading(false);
      setSearchLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchContents(true);
  }, []);

  // Filters & search
  useEffect(() => {
    fetchContents(false);
  }, [activeType, activeTag, debouncedSearch]);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this content?")) return;

    try {
      // Optimistic update
      setContents(prev => prev.filter(item => item._id !== id));
      await deleteContentApi(id);
    } catch (error) {
      console.error("Delete failed", error);
      fetchContents(false);
    }
  };

  if (initialLoading) return <FullPageLoader />;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        activeType={activeType}
        onSelectType={(type) => {
          setActiveType(type);
          setActiveTag(null);
        }}
      />

      <main className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Your Brain</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-black text-white rounded cursor-pointer"
          >
            Add Content
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your brain..."
            className="w-full border rounded px-3 py-2 pr-8"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-2 cursor-pointer"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Stable Brain Section */}
        <BrainSection />

        {searchLoading && (
          <div className="text-sm text-gray-500">Searching…</div>
        )}

        {/* Content */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contents.map(item => (
            <ContentCard
              key={item._id}
              content={item}
              onDelete={handleDelete}
              onTagClick={setActiveTag}
            />
          ))}
        </div>

        {showAddModal && (
          <AddContentModal
            onClose={() => setShowAddModal(false)}
            onSuccess={() => fetchContents(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
