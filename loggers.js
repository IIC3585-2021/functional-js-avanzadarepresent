const logTurnResult = (values) => { console.log(`${values.user.username} queda con ${values.user.score} puntos`); return values; };
const logTurn = (values) => { console.log(`Ingrese  lanzamientos de ${values.user.username}`); return values; };
const logWinner = (values) => { console.log(`Ganó ${values.user.username}`); return values; };

module.exports = { logTurnResult, logTurn, logWinner };
