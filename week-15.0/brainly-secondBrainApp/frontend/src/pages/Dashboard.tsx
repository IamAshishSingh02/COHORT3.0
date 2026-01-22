import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import ContentCard from "@/components/ContentCard";
import { fetchContentApi, deleteContentApi } from "@/services/content.api";

interface Content {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  type: string;
}

const Dashboard = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContents = async (type?: string) => {
    try {
      setLoading(true);
      const res = await fetchContentApi(
        type ? { type } : undefined
      );
      setContents(res.data.contents);
    } catch (error) {
      console.error("Fetch content failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteContentApi(id);
    fetchContents();
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar onFilter={fetchContents} />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">
          Your Second Brain
        </h1>

        {loading && (
          <p className="text-gray-500">
            Loading content...
          </p>
        )}

        {!loading && contents.length === 0 && (
          <p className="text-gray-500">
            No content found.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contents.map((item) => (
            <ContentCard
              key={item._id}
              title={item.title}
              content={item.content}
              tags={item.tags}
              onDelete={() => handleDelete(item._id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;