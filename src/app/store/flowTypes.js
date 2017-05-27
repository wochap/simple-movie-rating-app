// @flow

type Ids = Array<number>

type OptimisticState = {
  error: Error|null,
  isFulfilled: boolean,
  isPending: boolean,
  isCreating: boolean,
  isUpdating: boolean
}

export type Actor = {
  id?: string,
  firstName: string,
  lastName: string,
  gender: boolean,
  birthDate: Date,
  movies: Ids
}

export type Movie = {
  id?: string,
  name: string,
  releaseYear: number,
  grossIncome: number,
  actors: Ids,
  directorName: string,
  rating: number,
  genre: string
}

type OptimisticActor = {
  data: Actor,
  state: OptimisticState
}

type OptimisticMovie = {
  data: Movie,
  state: OptimisticState
}

export type OptimisticActors = {
  data: Array<OptimisticActor>,
  state: OptimisticState
}

export type OptimisticMovies = {
  data: Array<OptimisticMovie>,
  state: OptimisticState
}

export type Search = {
  query: string,
  type: "ACTORS"|"MOVIES"
}

export type State = {
  search: Search,
  actors: OptimisticActors,
  movies: OptimisticMovies
}
