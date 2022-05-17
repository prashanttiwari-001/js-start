// node modules are used to perform different tasks as required 

// const { fstat } = require("fs");

// const { fstat } = require("fs");

// file system module 
// read, write, update, delete

// for reading a file 
const fs = require('fs')
// const path = require('path')
// let content = fs.readFileSync('read.txt') //readFileSync is a method top read a file 

// console.log('This is read data ->' + content)

//for writing a file 
// // writeFilseSync method is used to put data to data to a file
// // if the file doent exist it creates a new file and to it
// fs.writeFileSync('write.txt' , 'Hello Everyone')

// //append a file 
// // append file sync adds to the previously written file 
// // basically it append a file with new data passed
// fs.appendFileSync('write.txt' , ' hello i am prashant ')


// //delete a file by passing its path
// //unlinkSync 

// fs.unlinkSync('write.txt')
// console.log('file removed')   



// Directories
//mkdirSync is used to create a directory
//fs.mkdirSync('myDetails')

// delete a directory
// fs.rmdirSync('myDetails')


//to check wheather a directory exists or not we can use existsSync method
//if the dirctory exists the method returns true otherwise false
// let a = fs.existsSync('myDetails')
// console.log(a)

//stats of a path (details of a folder)

// let statsofPath = fs.lstatSync('myDetails')
// console.log(statsofPath)

// console.log('isFile?' ,statsofPath.isFile())
 //isFile is a method that checks whether a passed path is a file or not
// console.log('isDirectory' ,statsofPath.isDirectory()) 
// isDirectory that checks wheather a passed path is a directory 

// readdirSync method is used to check the content of a particular director
//  let folderPath = 'C:\\Users\\Pep_Coder_70\\Desktop\\java script\\myDetails'
// let folderContent = fs.readdirSync (folderPath)
// console.log('directory content ' + folderContent)


//COPY FILES    

// SRC folder , destFolder 

// let srcFilePath = 'C:\\Users\\Pep_Coder_70\\Desktop\\java script\\myDetails\\f2.txt'
// let destFolder = 'C:\\Users\\Pep_Coder_70\\Desktop\\java script\\myDocument'

// let tobecopiedFileName = path.basename(srcFilePath)
// console.log(tobecopiedFileName)

// let destPath = path.join(destFolder , tobecopiedFileName)
// console.log(destPath)

// fs.copyFileSync(srcFilePath , destPath)
// console.log("file Copied") 


