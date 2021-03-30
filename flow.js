const { exit } = require('process');
const utils = require('./utils');
const { netScoreCalculator } = require('./scores.js');
const { logTurnResult, logTurn, logWinner } = require('./loggers.js');

const inputThrow = (username, originalScore, thrown) => ({ username: username, score: netScoreCalculator(originalScore, thrown) });

const initUsers = (...names) => (names.map(n => ({ username: n, score: 501 })));

const anyWinner = (users) => (users.some((user) => user.score === 0));

const exitGame = (values) => anyWinner([values.user]) ? (logWinner(values) && exit()) : values;

const getPlay = (plays) => plays.shift();

const userTurn = ({ user, users, inputs }) => ({ user: inputThrow(user.username, user.score, getPlay(inputs)), users, inputs });

const turnPipeline = utils.pipe(logTurn, userTurn, exitGame, logTurnResult);

const playGame = function playGame (inputs,...names) {
  let users = initUsers(...names);
  while (!anyWinner(users)) {
    users = users.map(user => turnPipeline({ user, users, inputs }).user);
  }
};

module.exports = { playGame }