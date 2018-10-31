import * as battleServices from '../services/battles'

export const list = async (req, res) => {
	const battles = await battleServices.getAll()
	res.send(battles)
}

export const find = async (req, res) => {
	const battle = await battleServices.getById(req.params.id)
	res.send(battle)
}

export const create = async (req, res) => {
	const { id, name, location, date } = req.body

	await battleServices.setBattle(id, name, location, date)
	res.send({ id, message: `Successfully created - battle: ${name}` })
}

export const update = async (req, res) => {
	const { id, name, location, date } = req.body

	await battleServices.setBattle(id, name, location, date)
	res.send({ id: id, message: 'Successfully updated - battle: ${name}' })
}

export const remove = async (req, res) => {
	const { id } = req.body
	await battleServices.removeBattle(id)
	res.send({ id, message: 'Successfully removed - battle: ${name}' })
}
