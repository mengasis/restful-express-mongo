import { create as createHeroe } from '../services/heroes'

export const list = (req, res) => res.send(['All'])

export const find = (req, res) =>
	res.send({
		id: req.params.id,
		name: 'Alejandro Magno',
		nationality: 'Macedonio',
		battles: []
	})

export const create = async (req, res) => {
	const { id, name, nationality, battles } = req.body

	await createHeroe(id, name, nationality, battles)
	return res.send({ id, message: `Successfully created - heroe: ${name}` })
}

export const update = (req, res) =>
	res.send({ id: req.params.id, message: 'Successfully updated' })

export const remove = (req, res) =>
	res.send({ id: req.params.id, message: 'Successfully removed' })
