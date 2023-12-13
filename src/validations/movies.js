const zod = require("zod");

const movieInfo = zod.object({
  movieId: zod.string(),
});

const movieValidator = zod
  .object({
    userId: zod.string(),
    movieListId: zod.string().nullable(),
    selectedlist: zod.array(movieInfo),
  })
  .strict();
module.exports = { movieValidator };