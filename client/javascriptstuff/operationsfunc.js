export function operationsfunc(op, local, editor) {
  if (!local) {
    //then we want to translate op back into javascript
    let cursor = 0
    op.forEach(item => {
      if (typeof item === 'number') {
        cursor += item
      } else if (typeof item === 'string') {
        let lineAndCharactor = editor.current.editor.posFromIndex(cursor)
        editor.current.editor.replaceRange(
          item,
          lineAndCharactor,
          undefined,
          'server'
        )
        cursor += item.length
      } else if (typeof item === 'object') {
        let beginninglineAndCharactor = editor.current.editor.posFromIndex(
          cursor
        )
        let endinglineAndCharactor = editor.current.editor.posFromIndex(
          cursor + item.d
        )
        editor.current.editor.replaceRange(
          '',
          beginninglineAndCharactor,
          endinglineAndCharactor,
          'server'
        )

        cursor += item.d
      } else {
        console.log('error')
      }
    })
  }
}
