import api from "./api";

export const signupApi = (data: {
  name: string
  email: string
  password: string
}) => {
  return api.post("/auth/signup", data)
}

export const signinApi = (data: {
  email: string
  password: string
}) => {
  return api.post("/auth/signin", data)
}
