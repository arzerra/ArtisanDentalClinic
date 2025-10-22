import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/button/LogoutButton.jsx";
import Preloader from "../../components/preloader/Preloader.jsx";

function Dashbord() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session?.user) {
        navigate("/");
      } else {
        setUser(data.session.user);
      }
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session?.user) {
          navigate("/");
        } else {
          setUser(session.user);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  if (loading) return <Preloader />;
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex">Welcome to your dashboard {user?.email}</div>
        <div className="flex">
          <LogoutButton />
          <LogoutButton />
          <LogoutButton />
        </div>
      </div>
    </>
  );
}

export default Dashbord;
