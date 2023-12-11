const zod = require("zod");

const userLogin = zod.object({
  userId: zod.string(),
  password: zod.number(),
}).strict();

module.exports = { userLogin };
