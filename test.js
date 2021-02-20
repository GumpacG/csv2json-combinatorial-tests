let csvToJson = require('./csvToJson/src/csvToJson');

let fileInputName = './TestData/TestFiles/myInputFile.csv'; 
let fileOutputName = 'myOutputFile.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);