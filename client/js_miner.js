const rollLessDie = async () => {
  // Roll some dice!
  console.log('Javascript, rolling!')

  // Start a counter for number of mining runs. 
  let nonce = 0

  // This dummy data represents the potential header of the previous block
  const headerHash = parseInt("01000000" +
  "81cd02ab7e569e8bcd9317e2fe99f2de44d49ab2b8851ba4a308000000000000" +
  "e320b6c2fffc8d750423db8b1eb942ae710e951ed797f7affc8892b0f1fc122b" +
  "c7f5d74d" +
  "f2b9441a" +
  "42a14695", 16)

  // The target of the first block ever mined by Satoshi Nakamoto, and the easiest
  // it has ever been to come up with a solution
  const target = '0x00000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'
  
  const start = new Date
  while (true) {
    if (nonce === 1000000) {
      break
    }

    // Use the Forge library to hash in Javascript
    let md1 = forge.md.sha256.create();
    let md2 = forge.md.sha256.create();

    // Add nonce to headerHash
    let headerAndNonce = headerHash + nonce
    
    md1.update(headerAndNonce);
    
    let firstHash = md1.digest().toHex()
    md2.update(firstHash)
    let secondHash = md2.digest().toHex()

    if (parseInt(secondHash) < parseInt(target)) {
      console.log(`First block in the universe successfully mined with hash ${secondHash}!`)
    }

    nonce += 1 
  }
  const end = new Date

  // Return time to complete 1 million operations
  return end - start
}

export { rollLessDie }