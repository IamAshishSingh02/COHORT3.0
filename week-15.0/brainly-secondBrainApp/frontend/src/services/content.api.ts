import api from "./api";

export const fetchContentApi = (params?: {
  type?: string;
  tag?: string;
  search?: string;
}) => {
  return api.get("/content", { params });
};

export const deleteContentApi = (id: string) => {
  return api.delete(`/content/${id}`);
};
