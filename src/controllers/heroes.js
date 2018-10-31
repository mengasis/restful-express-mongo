import * as heroesServices from '../services/heroes'

export const list = async (req, res) => {
	const heroes = await heroesServices.getAll()
	res.send(heroes)
}

export const find = async (req, res) => {
	const heroe = await heroesServices.getById(req.params.id)
	res.send(heroe)
}

export const create = async (req, res) => {
	const { id, name, nationality, battles } = req.body

	await heroesServices.setUser(id, name, nationality, battles)
	res.send({ id, message: `Successfully created - heroe: ${name}` })
}

export const update = async (req, res) => {
	const { id, name, nationality, battles } = req.body

	await heroesServices.setUser(id, name, nationality, battles)
	res.send({ id: id, message: 'Successfully updated - heroe: ${name}' })
}

export const remove = async (req, res) => {
	const { id } = req.body
	await heroesServices.removeUser(id)
	res.send({ id, message: 'Successfully removed - heroe: ${name}' })
}
