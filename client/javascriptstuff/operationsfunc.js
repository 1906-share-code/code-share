const operations = {
  number: numberOp,
  string: stringOp,
  object: objectOp
}

export function operationsfunc(op, local, editor) {
  if (!local) {
    //then we want to translate op back into javascript
    let cursor = 0
    op.forEach(item => {
      cursor = operations[typeof item](cursor, item, editor)
    })
  }
}

function numberOp(cursor, item) {
  cursor += item
  return cursor
}

function stringOp(cursor, item, editor) {
  let lineAndCharactor = editor.current.editor.posFromIndex(cursor)
  editor.current.editor.replaceRange(
    item,
    lineAndCharactor,
    undefined,
    'server'
  )
  cursor += item.length
  return cursor
}

function objectOp(cursor, item, editor) {
  let beginninglineAndCharactor = editor.current.editor.posFromIndex(cursor)
  let endinglineAndCharactor = editor.current.editor.posFromIndex(
    cursor + item.d
  )
  editor.current.editor.replaceRange(
    '',
    beginninglineAndCharactor,
    endinglineAndCharactor,
    'server'
  )
  return cursor
}
