import Mongoose from 'mongoose'

const heroesSchema = new Mongoose.Schema({
	id: Number,
	name: { type: String, default: '', trim: true },
	nationality: { type: String, default: 'None', trim: true },
	battles: [String],
	createdAt: { type: Date, default: Date.now }
})

export default Mongoose.model('Heroes', heroesSchema)
