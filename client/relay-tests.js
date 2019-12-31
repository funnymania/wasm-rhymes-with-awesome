import { roll_many_sided_die } from './wasm_miner.js'
import { rollLessDie } from './js_miner.js'

const mineAway = async () => {
  const WASMResult = {} 
  WASMResult.title = 'WASM cryptomining Speed'
  // WASMResult.data = await roll_many_side_die()

  const JSResult = {}
  JSResult.title = 'JS cryptomining Speed'
  const start = new Date
  await rollLessDie()
  JSResult.data = new Date - start

  addResultToDisplay(WASMResult)
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