import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useNotifications } from "../context/NotificationContext";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const { notify } = useNotifications();

  useEffect(() => {
    let surplus = [];
    let demands = [];

    const unsub1 = onSnapshot(collection(db, "surplus"), snap => {
      surplus = snap.docs.map(doc => doc.data());
      updateMatches(surplus, demands);
    });

    const unsub2 = onSnapshot(collection(db, "demands"), snap => {
      demands = snap.docs.map(doc => doc.data());
      updateMatches(surplus, demands);
    });

    const updateMatches = (s, d) => {
      const result = [];

      s.forEach(sItem => {
        d.forEach(dItem => {
          if (sItem.item?.toLowerCase() === dItem.item?.toLowerCase()) {
            result.push({
              item: sItem.item,
              surplusQty: sItem.quantity,
              surplusUnit: sItem.unit || "Tons",
              demandQty: dItem.quantity,
              demandUnit: dItem.unit || "Tons",
              timestamp: new Date().toLocaleTimeString()
            });
          }
        });
      });

      if (result.length > matches.length && matches.length > 0) {
        notify(`${result.length - matches.length} new matches found!`, "success");
      }

      setMatches(result);
    };

    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  return (
    <div className="space-y-4">
      {matches.length === 0 ? (
        <div className="text-center py-20 bg-surface-container-lowest/50 rounded-3xl border-2 border-dashed border-outline-variant/20">
          <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">analytics</span>
          <p className="text-on-surface-variant font-medium">Scanning for resource correlations...</p>
        </div>
      ) : (
        matches.map((m, i) => (
          <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-[1.5rem] editorial-shadow border border-outline-variant/5 hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">dataset_linked</span>
            </div>
            <div className="flex-1 text-left">
              <div className="flex justify-between items-start">
                <div className="font-extrabold text-[#154212]">{m.item}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{m.timestamp}</div>
              </div>
              <div className="text-sm text-on-surface-variant mt-1 flex items-center gap-2">
                <span className="font-bold text-primary">{m.surplusQty} {m.surplusUnit}</span> 
                <span className="material-symbols-outlined text-xs">sync_alt</span>
                <span className="font-bold text-secondary">{m.demandQty} {m.demandUnit}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}