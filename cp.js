const cp = require('child_process')

// console.log('trying to open calculator')
// cp.execSync('calc')

// console.log('calculator opened')

// console.log('trying to open vs code')
// cp.execSync('code')

// console.log('vs code opened')

//  cp.execSync('start chrome https://www.youtube.com/')

let output = cp.execSync('node test.js')
console.log(' ' + output)