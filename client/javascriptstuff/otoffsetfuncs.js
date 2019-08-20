const changeHandlers = {
  '+input': handleInputChange,
  paste: null,
  delete: null
}

export function transformCodeMirrorChange(change, value) {
  console.log(change)
  return changeHandlers[change.origin](change, value)
}

function calculateOffsetIndex(value, line, ch) {
  let arr = value.split('\n') //what about the return key?
  let s = ch
  for (let i = 0; i < line; i++) {
    s += arr[i].length + 2
  }
  return s
}

function handleInputChange(change, value) {
  let index = calculateOffsetIndex(value, change.from.line, change.from.ch)
  let insertedChar
  if (
    change.text.length === 2 &&
    change.text[0] === '' &&
    change.text[1] === ''
  ) {
    insertedChar = '33'
  } else {
    insertedChar = change.text[0]
  }
  return [index, insertedChar]
}
