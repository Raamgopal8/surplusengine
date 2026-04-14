import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import image from "../assets/images.png";
import { 
  Package, 
  Handshake, 
  Bell, 
  LogOut, 
  CreditCard,
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const { user, logout } = useAuth();

  const menuItems = [
  
    { id: "inventory", label: "Inventory", icon: Package },
    { id: "notifications", label: "Alerts", icon: Bell },
    { id: "vault", label: "Vault", icon: CreditCard },
  ];

  return (
    <aside className="sidebar-glass">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <img src={image} alt="Logo" className="logo-icon" />
        </div>
        <span className="brand-name">Bounty<span>Bridge</span></span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button 
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="nav-icon" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
       
        <button className="nav-item logout" onClick={logout}>
          <LogOut className="nav-icon" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
