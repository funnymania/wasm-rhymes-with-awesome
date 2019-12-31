import { roll_many_sided_die } from './wasm_miner.js'
import { rollLessDie } from './js_miner.js'

const mineAway = async () => {
  const WASMResult = {} 
  WASMResult.title = 'WASM cryptomining Speed'
  const startWASM = new Date
  await roll_many_sided_die()
  WASMResult.data = new Date - startWASM
  addResultToDisplay(WASMResult)

  const JSResult = {}
  JSResult.title = 'JS cryptomining Speed'
  const startJS = new Date
  await rollLessDie()
  JSResult.data = new Date - startJS
  addResultToDisplay(JSResult)
}

function addResultToDisplay(result) {
  console.log('Display results...')

  // Create results element
  let newRes = document.createElement('div')
  newRes.classList.add('results-row')

  let newResText = document.createTextNode(`${result.title}: ${result.data / 1000} seconds`)
  newRes.appendChild(newResText)

  // Add to results-lists
  document.getElementById('results-list').appendChild(newRes)
}

export default mineAway