import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Vault from "./components/Vault";
import NotificationList from "./components/NotificationList";
import Login from "./components/Auth/Login";
import LandingPage from "./components/LandingPage";
import SurplusPage from "./components/SurplusPage";
import DemandPage from "./components/DemandPage";

function AppContent() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("landing");

  useEffect(() => {
    if (user && activeTab === "login") {
      setActiveTab("dashboard");
    }
  }, [user, activeTab]);

  if (loading) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "landing": return <LandingPage setActiveTab={setActiveTab} />;
      case "surplus": return <SurplusPage setActiveTab={setActiveTab} />;
      case "demand": return <DemandPage setActiveTab={setActiveTab} />;
      case "dashboard": return user ? <Dashboard /> : <Login />;
      case "vault": return user ? <Vault /> : <Login />;
      case "notifications": return user ? <NotificationList /> : <Login />;
      case "login": return <Login />;
      default: return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;