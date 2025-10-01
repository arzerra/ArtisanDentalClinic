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
  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session?.user) {
      navigate("/login");
    } else {
      setUser(data.session.user);
    }
    setLoading(false);
  };

  getSession();

  const { data: authListener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      if (!session?.user) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
    }
  );

  return () => {
    authListener.subscription.unsubscribe(); // ✅ correct way
  };
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
