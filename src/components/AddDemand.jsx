import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNotifications } from "../context/NotificationContext";

export default function AddDemand({ setActiveTab }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Tons");
  const { user } = useAuth();
  const { notify } = useNotifications();

  const handleSubmit = async () => {
    if (!user) {
      notify("Please sign in to post requests", "info");
      setActiveTab("login");
      return;
    }

    await addDoc(collection(db, "demands"), {
      item,
      quantity: Number(quantity),
      unit,
      createdAt: Date.now(),
      userId: user.uid
    });

    setItem("");
    setQuantity("");
    setUnit("Tons");
  };

  const categories = [
    "Organic Wheat", "Heritage Barley", "Golden Millet", "Jasmine Rice",
    "Fresh Carrots", "Bell Peppers", "Leafy Greens", "Sun-Ripened Tomatoes",
    "Artisanal Lentils", "Extra Virgin Oil", "Bulk Soya"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Required Ingredient</label>
        <select 
          className="w-full bg-white/50 border border-outline-variant/20 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
          value={item} 
          onChange={e => setItem(e.target.value)}
        >
          <option value="" disabled>Select Ingredient</option>
          {categories.map(f => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>

      <div className="space-y-4">
        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Required Volume & Unit</label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input 
              className="w-full bg-white/50 border border-outline-variant/20 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              type="number"
              placeholder="0.00" 
              value={quantity} 
              onChange={e => setQuantity(e.target.value)} 
            />
          </div>
          <select 
            className="w-32 bg-white/50 border border-outline-variant/20 rounded-2xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer font-bold text-xs text-on-surface-variant"
            value={unit}
            onChange={e => setUnit(e.target.value)}
          >
            <option value="Tons">Tons</option>
            <option value="Kgs">Kgs</option>
            <option value="Lbs">Lbs</option>
            <option value="Quintals">Quintals</option>
            <option value="Units">Units</option>
          </select>
        </div>
      </div>

      <button 
        className="w-full btn-secondary py-5 text-lg" 
        onClick={handleSubmit} 
        disabled={!item || !quantity || Number(quantity) <= 0}
      >
        Post Request
      </button>
    </div>
  );
}