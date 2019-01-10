var uniqueRandomArray = require('unique-random-array')
var names = require('./names');

module.exports = {
    all: names,
    random: uniqueRandomArray(names)
}