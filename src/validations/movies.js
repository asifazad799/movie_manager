const zod = require("zod");

const movieInfo = zod.object({
  movieId: zod.string(),
});

const movieValidator = zod.object({
  userId: zod.string(),
  movieListId: zod.string().nullable(),
  selectedlist: zod.array(movieInfo),
});

const movieSearch = zod
  .object({
    search: zod.string().optional().nullable(),
    neList: zod.string().optional().nullable(),
  })
  .strict();

const userMovieList = zod
  .object({
    userId: zod.string(),
  })
  .strict();

const deleteMovie = zod
  .object({
    movieId: zod.string(),
    userId: zod.string(),
  })
  .strict();

module.exports = { movieValidator, movieSearch, userMovieList, deleteMovie };
