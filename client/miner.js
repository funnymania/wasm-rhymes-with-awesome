async function mineAway() {
  const WASMResult = {} 
  WASMResult.title = 'WASM cryptomining Speed'
  // WASMResult.data = await fetchWASM()

  const JSResult = {}
  JSResult.title = 'JS cryptomining Speed'
  // JSResult.data = await benchmarkJS()

  addResultToDisplay(WASMResult)
  addResultToDisplay(JSResult)
}

// DEMO: Complete this method
async function fetchWASM() {
  console.log('Fetching WASM...')
  await WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
    .then(results => {
      console.log(results)
    }); 
}

// TODO: Complete this method
async function benchmarkJS() {
  // Start a counter for number of SHA256 run. 
  let counter = 0

  // Compute SHA256 over and over again for 30 seconds

  // Return counter
  return counter
}

function addResultToDisplay(result) {
  console.log('Display results...')

  // Create results element
  let newRes = document.createElement('div')
  newRes.classList.add('results-row')

  let newResText = document.createTextNode(`${result.title}: ${result.data}`)
  newRes.appendChild(newResText)

  // Add to results-lists
  document.getElementById('results-list').appendChild(newRes)
}

mineAway()