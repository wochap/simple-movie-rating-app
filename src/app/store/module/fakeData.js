export const fakeMovies = [
  {
    id: '0',
    name: 'The worf of wall street',
    releaseYear: 2013,
    grossIncome: 116866727,
    actors: ['0', '1'],
    directorName: 'Martin Scorsese',
    rating: 8.2,
    genre: 'Biography, Comedy, Crime',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
  }, {
    id: '1',
    name: 'Titanic',
    releaseYear: 1997,
    grossIncome: 658672302,
    actors: ['0', '2'],
    directorName: 'James Cameron',
    rating: 7.7,
    genre: 'Drama, Romance',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg'
  }
]

export const fakeActors = [
  {
    id: '0',
    firstName: 'Leonardo',
    lastName: 'DiCaprio',
    gender: 1,
    birthDate: new Date(1974, 11, 11),
    movies: ['0', '1'],
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'
  }, {
    id: '1',
    firstName: 'Margot',
    lastName: 'Robbie',
    gender: 2,
    birthDate: new Date(1990, 7, 2),
    movies: ['0'],
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_UY317_CR12,0,214,317_AL_.jpg'
  }, {
    id: '2',
    firstName: 'Billy',
    lastName: 'Zane',
    gender: 1,
    birthDate: new Date(1966, 2, 24),
    movies: ['1'],
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5NzA2NTE0NF5BMl5BanBnXkFtZTcwNzAxMTUxMw@@._V1_UY317_CR15,0,214,317_AL_.jpg'
  }
]
