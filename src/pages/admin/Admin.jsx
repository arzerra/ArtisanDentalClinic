import { useEffect, useState } from "react";
import { supabase } from "../../supabase"; // adjust path to your supabase.js
import { useNavigate } from "react-router-dom";
import LogoutButton from "./components/LogoutButton.jsx";
import AddPatient from "./components/AddPatient";

export default function Admin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // listen to auth state
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session?.user) {
          navigate("/login"); // redirect if no user
        } else {
          setUser(session.user);
        }
        setLoading(false);
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex">Welcome {user?.email}</div>
        <div className="flex"><LogoutButton /></div>
      </div>
      <AddPatient />
    </>
  );
}
