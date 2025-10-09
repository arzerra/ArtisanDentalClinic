import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/button/LogoutButton.jsx";
import AddPatient from "./components/AddPatient.jsx";
import CreateUser from "./components/CreateUser.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { BsLayoutSidebar } from "react-icons/bs";
import Preloader from "../../components/preloader/Preloader.jsx";

export default function Admin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: "/images/icon/dashboard/nav/dashboard.png" },
    { name: "Patients", icon: "/images/icon/dashboard/nav/patients.png" },
    { name: "Messages", icon: "/images/icon/dashboard/nav/messages.png" },
    {
      name: "Appointments",
      icon: "/images/icon/dashboard/nav/appointments.png",
    },
    { name: "Create Staff", icon: "/images/icon/dashboard/nav/staff.png" },
  ];

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
      <div className="flex bg-gray-100 h-screen">
        {/* sidebar */}
        <div
          className={`fixed bg-white w-64 h-screen shadow ${
            sidebarOpen ? "-translate-x-0" : "-translate-x-64"
          } lg:translate-x-0 lg:static`}
        >
          <div className="p-4 flex justify-between">
            <div className="text-xl font-semibold">Logo</div>
            <div className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              X
            </div>
          </div>
          {/* navbar */}
          <div className="p-4 space-y-5">
            {navItems.map((item, index) => {
              return (
                <div key={index} className="flex p=2 items-center gap-3">
                  <div>
                    <img
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="w-5"
                    />
                  </div>
                  <div className="text-lg">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* main content */}
        <main className="flex-1">
          <header className="bg-white flex justify-between items-center p-4">
            <button
              className="p-2 text-xl lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <BsLayoutSidebar />
            </button>
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <div>
              <img
                src="images/icon/sidebar/dentist.png"
                alt="user icon"
                className="w-10 rounded-full"
              />
            </div>
          </header>
        </main>
      </div>
    </>
  );
}
