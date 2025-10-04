import React, { useState } from "react";
import { supabase } from "../../supabase.js";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

function LoginModal({ show, onClose }) {
  if (!show) return null;

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

  return createPortal(
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="w-[90%] sm:w-[70%] md:max-w-[545px] bg-white p-6 rounded-2xl relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Login form */}
        <form onSubmit={login} className="flex flex-col gap-4 font-['Quicksand']">
          <div className="flex items-center justify-center py-5">
            <h1 className="text-3xl font-bold ">LOGIN</h1>
          </div>
            <div className="flex flex-col items-center justify-center w-[90%] sm:w-[495px] mx-auto p-6 rounded-lg">
              <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-80 sm:w-110 border px-3 py-2 rounded-md"
                required
              />
              </div>
            
              <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-80 sm:w-110 border px-3 py-2 rounded-md"
                required
              />
              </div>

              <div className="flex flex-row items-center justify-between w-80 sm:w-110">
                <div className="flex justify-start">
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
                <div className="flex justify-end">
                  <h2 className="text-sm mt-2 cursor-pointer hover:underline">
                    Forgot Password?
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mb-2 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 w-110 "
              >
                Login
              </button>
            </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default LoginModal;
