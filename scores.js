const utils = require('./utils');

const multiplicator = (score) => (multiplier) => score * multiplier;

const bullsEye = multiplicator(1);
const singleBullsEye = bullsEye(25);
const doubleBullsEye = bullsEye(50);

const typeOfBull = (st) => (st === 'SB' ? singleBullsEye : doubleBullsEye);

// transforms the values of the array into corresponding values
const valueToScore = (array) => (Array.isArray(array) ? multiplicator(array[0])(array[1]) : typeOfBull(array));
// applies a function to each element of an array
const flattner = (array) => f => array.map(x => f(x));
// get total value of array
const adder = (array) => array.reduce((x, y) => x + y);

// net score of all the thrown darts
const thrownScoreCalculator = (score) => utils.compose(adder, flattner(score))(valueToScore);

// returns the net score for a given user with a given turn and play
const netScoreCalculator = (originalScore, thrown) => Math.abs(originalScore - thrownScoreCalculator(thrown));

module.exports = { netScoreCalculator };
