import firestore from "./firestore"

export default () => {
  const tables = firestore.collection("tables").get()
  tables.then(snapShot => {
    snapShot.forEach(doc => console.log(doc.data()))
  })
}
