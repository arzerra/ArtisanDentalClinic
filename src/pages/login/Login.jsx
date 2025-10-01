import { useState } from "react";
import { supabase } from "../../supabase.js";
import { Link, useNavigate,  } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const login = async (e) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (form.email === "admin@artisandental.com") {
      navigate("/admin");
    } else {
      setError("Unauthorized: Only admin can login.");
      await supabase.auth.signOut();
    }
  };

  return (
    <div className="flex flex-col w-[400px] mx-auto mt-20">
      <h1 className="text-xl mb-4">Admin Login</h1>
      <form onSubmit={login} className="flex flex-col">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 mb-2"
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Login
        </button>
      </form>
      <Link to="/">Back</Link>
    </div>
  );
}
