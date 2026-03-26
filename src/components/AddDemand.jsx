import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddDemand() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async () => {
    await addDoc(collection(db, "demands"), {
      item,
      quantity: Number(quantity),
      createdAt: Date.now(),
    });

    setItem("");
    setQuantity("");
  };

  return (
    <div>
      <h3>Add Demand</h3>
      <input placeholder="Item" value={item} onChange={e => setItem(e.target.value)} />
      <input placeholder="Qty" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}