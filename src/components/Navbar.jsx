import { useAuth } from "../context/AuthContext";

export default function Navbar({ activeTab, setActiveTab }) {
  const { user, logout } = useAuth();

  const navItems = [
    { id: "landing", label: "Home" },
    { id: "surplus", label: "Surplus" },
    { id: "demand", label: "Demand" },
    { id: "dashboard", label: "Dashboard" },
    { id: "vault", label: "Vault" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbfbdf]/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div 
          className="text-2xl font-bold text-[#154212] tracking-tighter cursor-pointer"
          onClick={() => setActiveTab("landing")}
        >
          AgriCultivate
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`font-['Manrope'] font-medium text-sm tracking-tight transition-colors duration-300 ${
                activeTab === item.id 
                ? "text-[#154212] border-b-2 border-[#154212] pb-1" 
                : "text-[#1b1d0c]/70 hover:text-[#154212]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <button 
              className="bg-white text-on-primary-fixed-variant px-6 py-2.5 rounded-full font-label font-bold text-sm hover:opacity-90 transition-all duration-200"
              onClick={logout}
            >
              Sign Out
            </button>
          ) : (
            <button 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-label font-bold text-sm hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-200"
              onClick={() => setActiveTab("login")}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
