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

const movieSearch = zod
  .object({
    search: zod.string().optional(),
    neList: zod.string().optional(),
  })
  .strict();

const userMovieList = zod
  .object({
    userId: zod.string(),
  })
  .strict();

module.exports = { movieValidator, movieSearch, userMovieList };
