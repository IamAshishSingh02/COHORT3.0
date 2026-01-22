import api from "./api";

export const generateShareLinkApi = () => {
  return api.post("/brain/share");
};

export const revokeShareLinkApi = () => {
  return api.delete("/brain/share");
};

export const getSharedBrainApi = (token: string) => {
  return api.get(`/brain/share/${token}`);
};
