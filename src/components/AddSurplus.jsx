import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddSurplus() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async () => {
    await addDoc(collection(db, "surplus"), {
      item,
      quantity: Number(quantity),
      createdAt: Date.now(),
    });

    setItem("");
    setQuantity("");
  };

  return (
    <div className="form-group">
      <h3>Post Surplus</h3>
      <input 
        placeholder="What do you have? (e.g., Bread)" 
        value={item} 
        onChange={e => setItem(e.target.value)} 
      />
      <input 
        type="number"
        placeholder="Quantity (e.g., 5)" 
        value={quantity} 
        onChange={e => setQuantity(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add to Inventory</button>
    </div>
  );
}