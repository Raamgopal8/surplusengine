import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore("surplusengine");

export const matchSurplus = onDocumentCreated({
  document: "surplus/{id}",
  database: "surplusengine",
  region: "asia-south1"
}, async (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No snapshot for event.");
    return;
  }
  const surplus = snapshot.data();

  const demandsSnapshot = await db
    .collection("demands")
    .where("item", "==", surplus.item)
    .get();

  demandsSnapshot.forEach(doc => {
    console.log("Match found:", doc.data());
  });
});