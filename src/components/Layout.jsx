import Navbar from "./Navbar";

export default function Layout({ children, activeTab, setActiveTab }) {
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative pt-20">
        {/* Background Grain Pattern */}
        <div className="fixed inset-0 pointer-events-none grain-texture z-0"></div>
        
        <div className="relative z-10">
          {children}
        </div>
      </main>

      <footer className="bg-[#eff0d4] mt-20">
        <div className="px-12 py-8 max-w-screen-2xl mx-auto text-center">
          <p className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#1b1d0c]/40">
            © 2026 AgriCultivate Wholesale. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
