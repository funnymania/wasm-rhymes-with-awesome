const rollLessDie = async () => {
  // Roll some dice!
  console.log('Javascript, rolling!')

  // Start a counter for number of mining runs. 
  let nonce = 0

  // This dummy data represents the potential header of the previous block
  // NOTE: The actual potential header is a FAR larger number than this.
  // Number is unrealistically small for testing purposes
  const headerData = parseInt(
    "81cd02ab7e569",
    16
  )

  const encoder = new TextEncoder
  while (nonce < 100000) {
    // Add nonce to headerData
    let headerAndNonce = headerData + nonce
    
    let data = encoder.encode(headerAndNonce)
    const digest1 = await crypto.subtle.digest('SHA-256', data)
    const digest2 = await crypto.subtle.digest('SHA-256', digest1)

    nonce += 1 
  }

  return
}

export { rollLessDie }