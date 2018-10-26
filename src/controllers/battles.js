export const list = (req, res) => res.send(['All'])

export const find = (req, res) =>
	res.send({
		id: req.params.id,
		name: 'Asedio de Tiro',
		location: 'Tiro, Libano',
		date: '332 a.C.'
	})

export const create = (req, res) =>
	res.send({ id: 'battle-?', message: 'Successfully created' })

export const update = (req, res) =>
	res.send({ id: req.params.id, message: 'Successfully updated' })

export const remove = (req, res) =>
	res.send({ id: req.params.id, message: 'Successfully removed' })
