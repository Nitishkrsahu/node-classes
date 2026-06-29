const os = require('os');

console.log(`Server OS : ${os.platform()}\nServer IP: ${os.hostname()}\nFree Memory: ${os.freemem()}\nProcessor: ${os.cpus()[0].model}\nArchitecture: ${os.arch()}\nOS_Release: ${os.release()}`)