import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { supabase } from "../../../supabase.js";
import { Toaster, toast } from "react-hot-toast";

function ResetPasswordModal({ show, onClose }) {
  if (!show) return null;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    const { data: existingUser, error: lookupError } = await supabase
      .from("profiles")
      .select("email")
      .eq("email", email)
      .single();

    if (lookupError || !existingUser) {
      toast.error("No account found with that email.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(error.message);
      toast.error(error.message);
    } else {
      toast.success("Password reset link sent! Check your inbox.");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { duration: 4000 });
    }
  }, [error]);

  return createPortal(
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <Toaster position="top-center" />
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

        {/* Reset Password Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 font-['Quicksand']"
        >
          <div className="flex items-center justify-center py-5">
            <h1 className="text-3xl font-bold">Reset Password</h1>
          </div>

          <div className="flex flex-col items-center justify-center w-[90%] sm:w-[495px] mx-auto p-6 rounded-lg">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-80 sm:w-110 border px-3 py-2 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mb-2 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 w-110 cursor-pointer"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default ResetPasswordModal;
