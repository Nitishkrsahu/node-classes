const fs = require('fs');
console.log(`File requested`);

// const data = fs.readFileSync('./notes.txt');
// console.log(data.toString());


let data = fs.readFile('./notes.txt', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});


console.log(`File read complete`);