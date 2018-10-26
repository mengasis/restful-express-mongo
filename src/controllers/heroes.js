export const list = (req, res) => res.send(['All'])

export const create = (req, res) =>
	res.send({ id: '0x123', message: 'Successfully created' })

export const update = (req, res) =>
	res.send({ id: '0x123', message: 'Successfully updated' })

export const remove = (req, res) =>
	res.send({ id: '0x123', message: 'Successfully removed' })
