const os = require('os')

//Info about current user
const user = os.userInfo();

//Get system uptime in seconds (how long system has been running)
console.log(`The system uptime is ${os.uptime()} seconds`)

//Operating system info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);