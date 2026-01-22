import { useEffect, useState } from "react";
import { fetchContentApi } from "@/services/content.api";
import ContentCard from "@/components/ContentCard";
import Sidebar from "@/components/Sidebar";
import FullPageLoader from "@/components/FullPageLoader";

interface Content {
  _id: string;
  title: string;
  type: string;
  content: string;
  tags: string[];
  createdAt: string;
}

const Dashboard = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

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
        <h1 className="text-2xl font-semibold mb-6">Your Brain</h1>

        {contents.length === 0 ? (
          <div className="text-muted-foreground text-center mt-20">
            No content yet. Start adding notes to build your brain 🧠
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((item) => (
              <ContentCard key={item._id} content={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
