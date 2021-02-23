'use strict';

let expect = require('chai').expect;
let assert = require('chai').assert;
let index = require('../index');
let fs = require('fs');

describe('csvToJson test', function () {
    it('test 1', function() {
        let input1 = 'test/TestData/TestFiles/test1Input.csv';
        let output1 = 'test/TestOutput/Files/test1Output.json';
        let expectedOutput = require('./TestData/ExpectedOutput/test1Output.json');
        
        let result = index.getJsonFromCsv(input1);

        fs.writeFile(output1, JSON.stringify(result), function (err) {
            if (err) throw err;
            });

        expect(result).to.deep.equal(expectedOutput);
    });
});