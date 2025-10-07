import React, { useState } from "react";
import { supabase } from "../../supabase.js";
import { Toaster, toast } from "react-hot-toast";

function ResetPassword() {
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.updateUser({ password });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password updated! You can now log in.");
      window.location.href = "/";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Toaster />
      <form
        onSubmit={handleReset}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 w-96"
      >
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
