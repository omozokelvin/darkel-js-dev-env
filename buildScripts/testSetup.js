//this file isn't transpiled, so must use common js not es6

//Register babel to transpile before our test runs
require('babel-register');

//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function () { };
