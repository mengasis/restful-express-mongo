import Mongoose from 'mongoose'

const battleSchema = new Mongoose.Schema({
	id: String,
	name: { type: String, default: '', trim: true },
	location: { type: String, default: 'Unknowns', trim: true },
	date: [String],
	createdAt: { type: Date, default: Date.now }
})

export default Mongoose.model('Battle', battleSchema)
