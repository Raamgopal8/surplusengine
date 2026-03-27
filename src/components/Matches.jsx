import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Matches() {
  const [matches, setMatches] = useState([]);

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
          if (sItem.item === dItem.item) {
            result.push({
              item: sItem.item,
              surplusQty: sItem.quantity,
              demandQty: dItem.quantity,
            });
          }
        });
      });

      setMatches(result);
    };

    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  return (
    <ul className="scroll-list">
      {matches.length === 0 ? (
        <p style={{ color: "var(--on-surface-variant)", textAlign: "center", padding: "2rem" }}>
          No matches found yet. The engine is waiting...
        </p>
      ) : (
        matches.map((m, i) => (
          <li key={i} className="match-item">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ 
                width: "40px", 
                height: "40px", 
                background: "var(--primary-glow)", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold"
              }}>
                M
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>{m.item}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--on-surface-variant)" }}>
                  Matched: {m.surplusQty} Surplus ↔ {m.demandQty} Demand
                </div>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}