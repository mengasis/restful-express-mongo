export const list = (req, res) => res.send(['All'])

export const create = (req, res) =>
	res.send({ id: 'battle-?', message: 'Successfully created' })

export const update = (req, res) =>
	res.send({ id: 'battle-?', message: 'Successfully updated' })

export const remove = (req, res) =>
	res.send({ id: 'battle-?', message: 'Successfully removed' })
