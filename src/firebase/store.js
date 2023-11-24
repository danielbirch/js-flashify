import { db } from "../firebase/config.js";
import { query, collection, doc, getDocs, addDoc, setDoc } from 'firebase/firestore';

async function getCards() {
	const querySnap = await getDocs(query(collection(db, 'cards')))
	const cards = querySnap.docs.map(doc => ({ ...doc.data(), ref: doc.ref }));
}

// async function getCards() {
// 	this.querySnap = await getDocs(query(collection(db, 'cards')))
// 	this.cards = this.querySnap.docs.map(doc => ({ ...doc.data(), ref: doc.ref }));
// }

export { getCards }