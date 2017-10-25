import firestore from "./firestore"
import { Observable } from "rxjs/Observable"
const rightCompose = function() {
  const funcs = Array.apply(null, arguments).map(arg => arg)

  return funcs.reduce(function(a, b) {
    return function() {
      return a(b.apply(undefined, arguments))
    }
  }, a => a)
}

const withConvertToArray = snapShot => {
  const arr = []
  snapShot.forEach(doc => arr.push(doc))
  return arr
}

const withReadData = arr => arr.map(doc => doc.data())

const withObservableChain = observer => data => observer.next(data)

export default () => {
  return Observable.create(observer => {
    const withReadOutTable = rightCompose(withObservableChain(observer), withReadData, withConvertToArray)

    firestore.collection("tables").onSnapshot(snapShot => withReadOutTable(snapShot))
  })
}
/////
