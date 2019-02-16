module.exports = {
  "env": {
    "mocha": true
  },
  "plugins" : [
    "mocha"
  ],
  "rules": {
    "linebreak-style" : ["error", "windows"],
    "mocha/no-exclusive-tests" : "error",
    "prefer-arrow-callback" : "off",
    "func-names" : "off",
    "no-var": 0,
    "prefer-destructuring" : 0,
    "no-unused-expressions": 0
  },
  "extends": ["airbnb-base"]
};
