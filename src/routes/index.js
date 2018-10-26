import heroes from './heroes'
import battles from './battles'

export default [
	{
		path: '/heroes',
		handler: heroes
	},
	{
		path: '/battles',
		handler: battles
	}
]
