import React from "react";
import AskBrain from "@/components/AskBrain";
import ShareBrain from "@/components/ShareBrain";

const BrainSection = () => {
  return (
    <div className="space-y-6">
      <AskBrain />
      <ShareBrain />
    </div>
  );
};

export default React.memo(BrainSection);
