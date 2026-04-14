import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function SurplusList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "surplus"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.length === 0 ? (
        <p className="col-span-2 text-center py-8 text-on-surface-variant font-medium">No items in inventory.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="bg-white/40 p-5 rounded-[1.5rem] border border-outline-variant/10 text-left hover:bg-white/60 transition-all">
            <div className="flex justify-between items-start mb-2">
              <div className="font-bold text-primary">{item.item}</div>
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] uppercase font-bold">New</span>
            </div>
            <div className="text-2xl font-black text-on-background">{item.quantity} <span className="text-xs font-normal">{item.unit || "Tons"}</span></div>
          </div>
        ))
      )}
    </div>
  );
}