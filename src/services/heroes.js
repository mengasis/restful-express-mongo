import Heroe from '../models/heroe'

export const getAll = () => Heroe.find()

export const getById = id => Heroe.find({ id })

export const setUser = (id, name, nationality, battles) =>
	Heroe.update({ id }, { name, nationality, battles }, { upsert: true })

export const removeUser = id => Heroe.deleteOne({ id })
