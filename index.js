// Question No: 02

const fs = require("fs");

const data = 'String data saved in external text file ';

fs.writeFileSync("nodejs_architecture.txt", data);

// Question No: 03

const readData= fs.readFileSync("nodejs_architecture.txt");
console.log(readData.toString());

const Additional_txt="Additional text to append in file using append statement.!";

// Question No:04
fs.appendFileSync("nodejs_architecture.txt",Additional_txt);
// console.log(add_data.toString());


//  Question No: 05

fs.unlink('nodejs_architecture.txt',(err)=>{
    if(err){
        console.log("Error in deleting file");
        return;
    }
    console.log("File deleted Sucessfully..!");
})


