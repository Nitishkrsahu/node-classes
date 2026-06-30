const fs = require('fs');

console.log(`Writing Started`);

fs.writeFileSync('data.txt', 'Welcome to Node.js hii');

console.log(`Writing Completed`);