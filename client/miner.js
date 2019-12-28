import { rollManySidedDie } from './wasm_miner'
import { rollLessDie } from './js_miner'

const mineAway = async () => {
  const WASMResult = {} 
  WASMResult.title = 'WASM cryptomining Speed'
  // WASMResult.data = await rollManySidedDie()

  const JSResult = {}
  JSResult.title = 'JS cryptomining Speed'
  // JSResult.data = await rollLessDie()

  addResultToDisplay(WASMResult)
  addResultToDisplay(JSResult)
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

export { mineAway }