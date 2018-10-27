import Heroes from '../models/heroes'

export const create = (id, name, nationality, battles) =>
	Heroes.create({ id, name, nationality, battles })
