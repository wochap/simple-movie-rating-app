// @flow

type Ids = Array<number>

export type Actor = {
  id?: string,
  firstName: string,
  lastName: string,
  // https://en.wikipedia.org/wiki/ISO/IEC_5218
  gender: 0 | 1 | 2 | 9,
  birthDate: Date,
  movies: Ids,
  imageUrl?: string
}

export type Movie = {
  id?: string,
  name: string,
  releaseYear: number,
  grossIncome: number,
  actors: Ids,
  directorName: string,
  rating: number,
  genre: string,
  imageUrl?: string,
  coverImageUrl?: string
}

export type Actors = Array<Actor>
export type Movies = Array<Movie>

export type Search = {
  query: string,
  type: "ACTORS"|"MOVIES"
}

export type UpdateMovieInFormPayload = Movie | null
export type UpdateActorInFormPayload = Actor | null

export type State = {
  search: Search,
  actors: Actors,
  movies: Movies,

  movieInForm: UpdateMovieInFormPayload,
  actorInForm: UpdateActorInFormPayload,

  dialogs: {
    movie: boolean,
    actor: boolean
  }
}

// root state key resource
type ResourceType = 'actors' | 'movies'

export type CreateRecordPayload = {
  resourceType: ResourceType,
  record: Actor | Movie
}

export type DeleteRecordPayload = {
  resourceType: ResourceType,
  id: string
}

export type SearchType = 'ACTORS' | 'MOVIES'

export type RateMoviePayload = {
  movieId: string,
  rating: number
}

export type ToggleDialogPayload = {
  dialog: 'autor' | 'movie',
  value?: boolean
}
