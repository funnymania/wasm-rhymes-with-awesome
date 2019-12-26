async function mineAway() {
  const result = {} 
  // result.data = await fetchWASM()
  result.title = 'WASM cryptomining Speed'
  addResultToDisplay(result)
}

// TODO: Complete this method
async function fetchWASM() {
  console.log('Fetching WASM...')
  await WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
    .then(results => {
      console.log(results)
    }); 
}

function addResultToDisplay(result) {
  console.log('Display results...')

  // Create results element
  let newRes = document.createElement('span')
  newRes.classList.add('results-row')

  let newResText = document.createTextNode(`${result.title}: ${result.data}`)
  newRes.appendChild(newResText)

  // Add to results-lists
  document.getElementById('results-list').appendChild(newRes)
}

mineAway()