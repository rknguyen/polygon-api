function extractCCID(text: string) {
  const match = text.match(/name="ccid" content="(.*?)"/)
  return { ccid: match ? match[1] : null }
}

export { extractCCID }
