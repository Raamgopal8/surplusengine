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
    <div className="form-group">
      <h3>Request Item</h3>
      <input 
        placeholder="What do you need?" 
        value={item} 
        onChange={e => setItem(e.target.value)} 
      />
      <input 
        type="number"
        placeholder="Quantity" 
        value={quantity} 
        onChange={e => setQuantity(e.target.value)} 
      />
      <button onClick={handleSubmit}>Create Request</button>
    </div>
  );
}