import firebase from "firebase/app"
import "firebase/firestore"
import config from "./.credential/firebase-token.json"
const app = firebase.initializeApp(config)
export default app
