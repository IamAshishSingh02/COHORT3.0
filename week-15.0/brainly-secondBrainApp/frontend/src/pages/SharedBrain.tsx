import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSharedBrainApi } from "@/services/brain.api";
import ContentCard from "@/components/ContentCard";
import type { Content } from "@/components/ContentCard";
import FullPageLoader from "@/components/FullPageLoader";

const SharedBrain = () => {
  const { token } = useParams();
  const [contents, setContents] = useState<Content[]>([]);
  const [owner, setOwner] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShared = async () => {
      try {
        const res = await getSharedBrainApi(token as string);
        setOwner(res.data.owner.name);
        setContents(res.data.contents);
      } catch (err) {
        console.error("Failed to load shared brain", err);
      } finally {
        setLoading(false);
      }
    };

    fetchShared();
  }, [token]);

  if (loading) return <FullPageLoader />;

  return (
    <div className="min-h-screen p-6 bg-background">
      <h1 className="text-2xl font-semibold mb-2">
        {owner}’s Brain
      </h1>

      {contents.length === 0 ? (
        <p className="text-muted-foreground">
          No shared content available.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {contents.map((item) => (
            <ContentCard key={item._id} content={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedBrain;
