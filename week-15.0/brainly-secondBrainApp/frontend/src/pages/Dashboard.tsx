import { useEffect, useState } from "react";
import { fetchContentApi, deleteContentApi } from "@/services/content.api";
import ContentCard from "@/components/ContentCard";
import type { Content } from "@/components/ContentCard";
import Sidebar from "@/components/Sidebar";
import FullPageLoader from "@/components/FullPageLoader";
import AddContentModal from "@/components/AddContentModal";

const Dashboard = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchContents = async () => {
    try {
      setLoading(true);
      const res = await fetchContentApi();
      setContents(res.data.contents);
    } catch (error) {
      console.error("Failed to fetch content", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this content?"
    );

    if (!confirmed) return;

    try {
      // ✅ Optimistic UI update
      setContents((prev) => prev.filter((item) => item._id !== id));
      await deleteContentApi(id);
    } catch (error) {
      console.error("Failed to delete content", error);
      // fallback if delete fails
      fetchContents();
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Your Brain</h1>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-black text-white rounded hover:opacity-90 cursor-pointer"
          >
            Add Content
          </button>
        </div>

        {/* Content */}
        {contents.length === 0 ? (
          <div className="text-muted-foreground text-center mt-20">
            No content yet. Start adding notes to build your brain 🧠
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((item) => (
              <ContentCard
                key={item._id}
                content={item}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Add Content Modal */}
        {showAddModal && (
          <AddContentModal
            onClose={() => setShowAddModal(false)}
            onSuccess={fetchContents}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
