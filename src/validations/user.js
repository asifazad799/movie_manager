const zod = require("zod");

const userLogin = zod.object({
  userId: zod.string(),
  password: zod.number(),
});

module.exports = { userLogin };
