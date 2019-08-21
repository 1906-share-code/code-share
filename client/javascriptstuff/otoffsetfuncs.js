export function transformCodeMirrorChange(editor, change) {
  let index = editor.indexFromPos(change.from)
  let numOfCharsToDelete = change.removed.join(' ').length
  return [index, {d: numOfCharsToDelete}, change.text.join('\n')]
}
