import Battle from '../models/battle'

export const getAll = () => Battle.find()

export const getById = id => Battle.find({ id })

export const setBattle = (id, name, location, date) =>
	Battle.update({ id }, { name, location, date }, { upsert: true })

export const removeBattle = id => Battle.deleteOne({ id })
