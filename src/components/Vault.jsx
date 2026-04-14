import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import { useNotifications } from "../context/NotificationContext";

const stripePromise = loadStripe("pk_test_TYooMQauvdS7j5zUX97LN8Vq");

export default function Vault() {
  const [loading, setLoading] = useState(false);
  const { notify } = useNotifications();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const session = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) notify(error.message, "error");
    } catch (err) {
      notify("Failed to initiate payment", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 lg:px-16 py-12">
      <motion.div 
        className="max-w-screen-xl mx-auto space-y-16"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center space-y-4">
          <span className="font-label text-xs uppercase tracking-widest text-secondary font-black mb-4 block">Premium Tier</span>
          <h2 className="text-5xl font-bold tracking-tight text-on-background">Elite Sourcing Vault</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Unlock global supply chain transparency, real-time freight optimization, and laboratory-verified quality certification.</p>
        </div>

        <div className="flex justify-center">
          <div className="bg-primary text-white p-16 rounded-[3rem] editorial-shadow relative overflow-hidden max-w-2xl w-full">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold">Enterprise Pro</h3>
                  <p className="text-white/60 mt-1">For global distribution partners</p>
                </div>
                <div className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Active
                </div>
              </div>

              <div className="text-6xl font-black">$49<span className="text-lg text-white/40 ml-2">/month</span></div>

              <ul className="space-y-4">
                {[
                  { icon: "verified", text: "Priority Access to Heritage Listings" },
                  { icon: "monitoring", text: "Real-Time Freight Matching" },
                  { icon: "lab_profile", text: "Detailed Lab Analysis Reports" },
                  { icon: "support_agent", text: "Dedicated Sourcing Agent" }
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <span className="material-symbols-outlined text-secondary-fixed">{f.icon}</span>
                    <span className="font-medium">{f.text}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="w-full bg-white text-primary py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Initializing..." : "Upgrade to Enterprise"}
                <span className="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
