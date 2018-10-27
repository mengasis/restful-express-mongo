import Mongoose from 'mongoose'
import config from './development'

Mongoose.Promise = global.Promise

const connectToDb = async () => {
	try {
		await Mongoose.connect(
			`mongodb://${config.DB.HOST}:27017/${config.DB.NAME}`,
			{ useNewUrlParser: true }
		)
		console.log('Connected to mongo!!!')
	} catch (err) {
		console.log('Could not connect to MongoDB: ', err)
	}
}

export default connectToDb
