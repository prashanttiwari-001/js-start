const os = require('os') //this module is used to get details about an os of the machine 

console.log(os.arch()) // tells about the system architecture(32 or 64 bit)

console.log(os.platform()) // tells about the platform 

console.log(os.networkInterfaces()) // gives details about the network you are in 

console.log(os.cpus()) //gives details about the cpu