const zod = require("zod");

const sampleSchema = zod.object({
  query: zod.string(),
});

module.exports = {
    sampleSchema,
};
