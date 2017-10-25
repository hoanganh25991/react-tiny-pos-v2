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

const withReadData = arr => {
  const temp = arr.map(doc => doc.data())
  // console.log(temp)
  return temp
}

const fs = firestore.collection("tables")

const fsCallback = fs.onSnapshot.bind(fs)

const withObservableChain = s => o => o.next(s)

const x = o => l => cb => cb(l)

const m = (cb, xxx) => o => cb(s => o.next(xxx(s)))

export default () => {
  const xxx = rightCompose(m(fsCallback, rightCompose(withReadData, withConvertToArray)))

  // return Observable.create(o => xxx())

  // const xxx = rightCompose(
  //   withObservableChain,
  //   withReadData,
  //   withConvertToArray,
  // )
  //
  // const s2 = o => s => o.next(s)
  //
  // const m = o => {
  //   return rightCompose(
  //     fsCallback,
  //     s2(o),
  //     xxx
  //   )
  // }

  return Observable.create(xxx)
}
