// @flow

import rndm from 'rndm'
import localForage from 'localforage'
import {
  isDevelopment,
  ACTORS_KEY,
  MOVIES_KEY
} from 'src/app/config/constants' // eslint-disable-line

import type {
  Actor,
  Movie
} from './flowTypes'

localForage.config({
  name: 'simple-movie-rating-app'
})

const api = {
  getActors () {
    return getAllFromResource(ACTORS_KEY)
  },
  getActor (id: string) {
    return getRecordFromResource(ACTORS_KEY, id)
  },
  addActor (actor: Actor) {
    return addRecordToResource(ACTORS_KEY, actor)
  },
  updateActor (actor: Actor) {
    return updateRecordFromResource(ACTORS_KEY, actor)
  },
  deleteActor (id: string) {
    return deleteRecordFromResource(ACTORS_KEY, id)
  },
  getMovies () {
    return getAllFromResource(MOVIES_KEY)
  },
  getMovie (id: string) {
    return getRecordFromResource(MOVIES_KEY, id)
  },
  addMovie (movie: Movie) {
    return addRecordToResource(MOVIES_KEY, movie)
  },
  updateMovie (movie: Movie) {
    return updateRecordFromResource(MOVIES_KEY, movie)
  },
  deleteMovie (id: string) {
    return deleteRecordFromResource(MOVIES_KEY, id)
  },
  async updateRatingFromMovie (id: string, rating: number) {
    if (isDevelopment) await delay()

    const resource = await getAllFromResource(MOVIES_KEY)
    const record = resource.find(r => r.id === id)
    const newRecord = {
      ...record,
      rating
    }
    const newResource = resource.splice(resource.indexOf(record), 1, newRecord)

    await localForage.setItem(MOVIES_KEY, newResource)

    return newRecord
  }
}

export default api

async function getAllFromResource (key: string) {
  if (isDevelopment) await delay()

  const resource = localForage.getItem(key)

  return resource || [] // eslint-disable-line
}

async function getRecordFromResource (key: string, id: string) {
  if (isDevelopment) await delay()

  const resource = await getAllFromResource(key)
  const record = resource.find(record => record.id === id)

  if (!record) throw new Error('Record not found')

  return record
}

async function addRecordToResource (key: string, record: any) {
  if (isDevelopment) await delay()

  const resource = await getAllFromResource(key)
  const newRecord = {
    ...record,
    id: rndm(8)
  }
  const newResource = [newRecord, ...resource]

  await localForage.setItem(key, newResource)

  return newResource
}

async function updateRecordFromResource (key: string, record: any) {
  if (isDevelopment) await delay()

  const resource = await getAllFromResource(key)
  const recordIndex = resource.findIndex(r => r.id === record.id)
  const newResource = resource.splice(recordIndex, 1, record)

  await localForage.setItem(key, newResource)

  return record
}

async function deleteRecordFromResource (key: string, id: string) {
  if (isDevelopment) await delay()

  const resource = await getAllFromResource(key)
  const recordIndex = resource.findIndex(r => r.id === id)
  const newResource = resource.spliceisDevelopment(recordIndex, 1)

  return localForage.setItem(key, newResource)
}

function delay (time: number = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
