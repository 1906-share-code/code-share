const changeHandlers = {
  '+input': handleInputChange,
  '+paste': null,
  '+delete': handleDeleteChange
}

export function transformCodeMirrorChange(change, value) {
  console.log(change)
  return changeHandlers[change.origin](change, value)
}

function calculateOffsetIndex(value, line, ch) {
  let arr = value.split('\n') //what about the return key?
  let s = ch
  for (let i = 0; i < line; i++) {
    s += arr[i].length + 1
  }
  return s
}

function delCharsCount(removedArray) {
  return removedArray.join(' ').length
}

function handleDeleteChange(change, value) {
  let index = calculateOffsetIndex(value, change.from.line, change.from.ch)
  let numOfCharsToDelete = delCharsCount(change.removed)
  return [index, {d: numOfCharsToDelete}]
}

function handleInputChange(change, value) {
  let index = calculateOffsetIndex(value, change.from.line, change.from.ch)
  return [index, change.text.join('\n')]
}
