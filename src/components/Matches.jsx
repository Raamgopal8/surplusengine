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
    <ul>
      {matches.map((m, i) => (
        <li key={i}>
          {m.item} → Surplus: {m.surplusQty}, Demand: {m.demandQty}
        </li>
      ))}
    </ul>
  );
}