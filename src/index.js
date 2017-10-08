import uniqueRandomArray from 'unique-random-array'
const randomNames = require('./random-names.json')

const mainExport = {
  all: randomNames,
  rand: uniqueRandomArray(randomNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
