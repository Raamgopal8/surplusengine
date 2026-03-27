import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function SurplusList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "surplus"), snapshot => {
      setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  return (
    <ul className="scroll-list">
      {data.map(item => (
        <li key={item.id} className="item-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>{item.item}</span>
            <span style={{ color: "var(--primary-glow)", fontWeight: "bold" }}>{item.quantity} units</span>
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--on-surface-variant)", marginTop: "0.5rem" }}>
            Added {new Date(item.createdAt).toLocaleTimeString()}
          </div>
        </li>
      ))}
    </ul>
  );
}