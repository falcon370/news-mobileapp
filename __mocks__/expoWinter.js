// Mock for expo/src/winter to prevent Jest scope errors with lazy getters
// that call require() inside property getter functions.
module.exports = {};
