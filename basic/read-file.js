const fs = require('fs');

const filePath = 'proverbs.txt';

//==================
const fileContent2 = fs.readFileSync(filePath, 'utf-8');
console.log(fileContent2);
//==================


function getFileData(name) {
  //callback
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    console.log('Lines', data);
  
    //=================
  
    const lines = data.split('\n');
  
    lines.forEach((line, index) => {
      console.log(`Line ${index + 1}: ${line}`);
    });
  });  
}

getFileData(filePath);

console.log('==========');
const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log(fileContent);


