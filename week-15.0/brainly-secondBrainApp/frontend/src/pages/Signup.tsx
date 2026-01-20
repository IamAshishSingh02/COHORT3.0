import { useState } from "react";
import { signupApi } from "@/services/auth.api";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await signupApi({ name, email, password });
    login(res.data.user, res.data.token);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-sm space-y-4">
        <h1 className="text-2xl font-semibold">Sign up</h1>

        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border rounded px-3 py-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white rounded py-2 cursor-pointer"
        >
          Create account
        </button>
      </div>
    </div>
  );
};


export default Signup;
