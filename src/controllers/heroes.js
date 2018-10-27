import * as heroesServices from '../services/heroes'

export const list = async (req, res) => {
	const heroes = await heroesServices.getAll()
	res.send(heroes)
}

export const getHeroe = async (req, res) => {
	const heroe = await heroesServices.getHeroeById(req.params.id)
	res.send(heroe)
}

export const create = async (req, res) => {
	const { id, name, nationality, battles } = req.body

	await heroesServices.create(id, name, nationality, battles)
	res.send({ id, message: `Successfully created - heroe: ${name}` })
}

export const update = (req, res) =>
	res.send({ id: req.params.id, message: 'Successfully updated' })

export const remove = (req, res) =>
	res.send({ id: req.params.id, message: 'Successfully removed' })
