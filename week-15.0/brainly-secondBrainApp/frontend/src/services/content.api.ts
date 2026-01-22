import api from "./api";

export const fetchContentApi = (params?: {
  type?: string;
  tag?: string;
  search?: string;
}) => {
  return api.get("/content", { params });
};

export const createContentApi = (data: {
  title: string;
  type: "note" | "link" | "tweet" | "video" | "document" | "audio";
  content: string;
  tags: string[];
}) => {
  return api.post("/content", data);
};

export const deleteContentApi = (id: string) => {
  return api.delete(`/content/${id}`);
};
