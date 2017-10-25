import firestore from "./firestore"
import { Observable } from "rxjs/Observable"
// import {compose} from "recompose"
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

const withReadData = arr => {
  return arr.map(doc => doc.data())
}

const fs = firestore.collection("tables")
const fsCallback = fs.onSnapshot.bind(fs)

export default () => {
  const parse = rightCompose(withReadData, withConvertToArray)
  return Observable.create(o => fsCallback(s => o.next(parse(s))))
}
