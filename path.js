const path = require('path')


// extname is a function that will get the extension from the path of a file 
 let ext = path.extname('C:\\Users\\Pep_Coder_70\\Desktop\\java script\\read.txt')
 console.log('Exetension of the file -> ',ext)


let actualName = path.basename('C:\\Users\\Pep_Coder_70\\Desktop\\java script\\read.txt')
// basename is a function that will get the actual name of the file or a folder from it's path
console.log('Actual name of the file -> ',actualName)

console.log(__dirname) // get you the path of the current directory yau are in
console.log(__filename) // gets you the path of the current file you are in 