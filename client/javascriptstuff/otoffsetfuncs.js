export const changeHandlers = {
  '+input': handleInputChange,
  paste: null,
  delete: null
}

export function calculateOffsetIndex(text) {
  let arr = text.split('/n') //what about the return key?
  let s = 0
  for (let i = 0; i < arr.length; i++) {
    s += arr[i].length
  }
  return s
}

export function handleInputChange(change, value) {
  let operation = []
  //console.log(change)
  //let ch = change.from.ch
  //let line = change.from.line
  // console.log('line ' + line + 'change ' + ch)
  //console.log(value)
  //console.log(change.text[0])
  let ind = calculateOffsetIndex(value)
  operation.push(ind)
  let ch = change.text[0]
  operation.push(ch)
  console.log(operation)
  return operation
}
