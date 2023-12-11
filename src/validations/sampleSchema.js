const zod = require("zod");

const sampleSchema = zod.object({
  query: zod.string(),
});

const sampleSchema2 = zod.object({
  query: zod.string(),
});

module.exports = {
    sampleSchema,
    sampleSchema2
};
