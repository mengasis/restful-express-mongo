import * as battleServices from '../services/battles'

export const list = async (req, res) => {
	const battles = await battleServices.getAll()
	res.send(battles)
}

export const find = async (req, res) => {
	const battle = await battleServices.getById(req.params.id)
	res.send(battle)
}

export const create = (req, res) => {
	const { id, name, location, date } = req.body

	battleServices.setBattle(id, name, location, date).then(({ upserted }) => {
		if (!upserted) res.send({ id, message: 'The battle already exists.' })

		res.send({ id, message: `Successfully created - battle: ${name}` })
	})
}

export const update = (req, res) => {
	const { id, name, location, date } = req.body

	battleServices.setBattle(id, name, location, date).then(({ n }) => {
		if (!n) res.send({ id, message: 'The battle is not found' })

		res.send({ id: id, message: 'Successfully updated - battle: ${name}' })
	})
}

export const remove = (req, res) => {
	const { id } = req.body

	battleServices.removeBattle(id).then(({ n }) => {
		if (!n) res.send({ id, message: 'The battle is not found' })

		res.send({ id, message: `Successfully removed - battle: ${id}` })
	})
}
