import { useState } from "react";
import {
  generateShareLinkApi,
  revokeShareLinkApi
} from "@/services/brain.api";
import React from "react";

const ShareBrain = () => {
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const res = await generateShareLinkApi();
      setShareUrl(res.data.shareUrl);
    } catch (err) {
      console.error("Failed to generate share link", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRevoke = async () => {
    try {
      setLoading(true);
      await revokeShareLinkApi();
      setShareUrl(null);
    } catch (err) {
      console.error("Failed to revoke share link", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard");
  };

  return (
    <div className="border rounded-lg p-4 bg-white space-y-3">
      <h2 className="text-lg font-semibold">Share Your Brain</h2>

      {!shareUrl ? (
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Generating..." : "Generate Share Link"}
        </button>
      ) : (
        <>
          <div className="flex gap-2">
            <input
              readOnly
              value={shareUrl}
              className="flex-1 border rounded px-2 py-1 text-sm"
            />
            <button
              onClick={copyToClipboard}
              className="px-3 py-1 bg-gray-200 rounded text-sm cursor-pointer"
            >
              Copy
            </button>
          </div>

          <button
            onClick={handleRevoke}
            disabled={loading}
            className="text-sm text-red-600 underline cursor-pointer"
          >
            Revoke Share Link
          </button>
        </>
      )}
    </div>
  );
};

export default React.memo(ShareBrain);
