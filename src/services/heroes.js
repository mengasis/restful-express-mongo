import Heroes from '../models/heroes'

export const create = (id, name, nationality, battles) =>
	Heroes.create({ id, name, nationality, battles })

export const getAll = () => Heroes.find()

export const getHeroeById = id => Heroes.find({ id })
