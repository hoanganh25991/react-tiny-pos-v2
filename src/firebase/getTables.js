import firestore from "./firestore"
import { Observable } from "rxjs/Observable"

const leftCompose = function() {
  const funcs = Array.apply(null, arguments).map(arg => arg)

  if (funcs.length === 0) {
    return function(arg) {
      return arg
    }
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(function(a, b) {
    return function() {
      return b(a.apply(undefined, arguments))
    }
  })
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
    const withReadOutTable = leftCompose(withConvertToArray, withReadData, withObservableChain(observer))

    firestore.collection("tables").onSnapshot(snapShot => withReadOutTable(snapShot))
  })
}
/////
