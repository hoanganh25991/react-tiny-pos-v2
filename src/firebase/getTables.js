import firestore from "./firestore"

export default () => {
  return new Promise(resolve => {
    firestore.collection("tables").onSnapshot(snapShot => {
      const tables = []
      snapShot.forEach(doc => {
        tables.push(doc.data())
      })
      resolve(tables)
    })
  })
}
