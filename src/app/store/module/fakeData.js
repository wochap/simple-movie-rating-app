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
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    coverImageUrl: 'https://i.ytimg.com/vi/efSS1ov_Yq8/maxresdefault.jpg'
  }, {
    id: '1',
    name: 'Titanic',
    releaseYear: 1997,
    grossIncome: 658672302,
    actors: ['0', '2'],
    directorName: 'James Cameron',
    rating: 7.7,
    genre: 'Drama, Romance',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
    coverImageUrl: 'http://donde-esta.org/wp-content/uploads/2016/10/titanic-2.jpg'
  }, {
    id: '2',
    name: 'Guardians of the Galaxy Vol. 2',
    releaseYear: 2017,
    grossIncome: 658672302,
    actors: ['3'],
    directorName: 'James Gunn',
    rating: 8.7,
    genre: 'Action, Science Fiction',
    imageUrl: 'http://cps-static.rovicorp.com/2/Open/Disney_Media_Distribution_696/Program/29033565/_9by13/_derived_jpg_q90_410x410_m0/Guardians-of-the-Galaxy-Vol-2_PA_2x3.jpg?partner=allrovi.com',
    coverImageUrl: 'http://cde.cinescape.com.pe/ima/0/0/1/8/4/184814.jpg'
  }, {
    id: '3',
    name: 'Logan',
    releaseYear: 2017,
    grossIncome: 658672302,
    actors: ['4'],
    directorName: 'James Mangold',
    rating: 8.9,
    genre: 'Action',
    imageUrl: `http://cps-static.rovicorp.com/2/Open/20th_Century_Fox_39/Program/23857627/_derived_jpg_q90_410x410_m0/WOL_OneSheet_10-(1).jpg?partner=allrovi.com`, // eslint-disable-line
    coverImageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--ZC2CN0Br--/c_scale,fl_progressive,q_80,w_800/burippfu1wgkrteawe7p.jpg'
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
  }, {
    id: '3',
    firstName: 'Chris',
    lastName: 'Pratt',
    gender: 1,
    birthDate: new Date(1979, 6, 21),
    movies: ['2'],
    imageUrl: 'http://cps-static.rovicorp.com/2/Open/Getty_Images_406/Misc/_2by3/_derived_jpg_q90_500x500_m0/Patt-476597458.jpg?partner=allrovi.com'
  }, {
    id: '4',
    firstName: 'Hugh',
    lastName: 'Jackman',
    gender: 1,
    birthDate: new Date(1968, 9, 11),
    movies: ['3'],
    imageUrl: 'http://cps-static.rovicorp.com/3/JPG_500/MI0004/206/MI0004206163.jpg?partner=allrovi.com'
  }
]
