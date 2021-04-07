const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const compose = (f, g) => (x) => f(g(x));

module.exports = { pipe, compose };
