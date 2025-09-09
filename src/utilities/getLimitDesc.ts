export const getLimitDesc = (lexicalJson: any): string => {
  if (!lexicalJson?.root) return ''

  const traverse = (node: any): string => {
    if (node.text) return node.text
    if (node.children) return node.children.map(traverse).join(' ')
    return ''
  }

  const trimText = traverse(lexicalJson.root).trim()
  return trimText.slice(0, 75)
}
