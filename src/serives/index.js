const { authenticationService } = require("./unprotected-services");
const { movieService } = require("./protected-services");
const { testService } = require("./test-services");

module.exports = { authenticationService, movieService, testService };
