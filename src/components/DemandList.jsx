import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function DemandList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "demands"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="space-y-3">
      {items.length === 0 ? (
        <p className="text-center py-8 text-on-surface-variant font-medium">No active requests.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="flex justify-between items-center p-4 bg-white/40 rounded-2xl border border-outline-variant/10 hover:bg-white/60 transition-all">
            <div className="text-left font-bold text-on-background capitalize">{item.item}</div>
            <div className="text-secondary font-black">{item.quantity} {item.unit || "Tons"}</div>
          </div>
        ))
      )}
    </div>
  );
}