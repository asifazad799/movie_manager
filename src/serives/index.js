const {
  authenticationService,
  testService,
} = require("./unprotected-services");
const { movieService } = require("./protected-services");

module.exports = { authenticationService, movieService, testService };
