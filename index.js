import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import connectToDb from './src/config/db'

connectToDb()

import routes from './src/routes'

const app = express()
app.server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes.map(({ path, middleware = [], handler }) => {
	return app.use(path, middleware, handler)
})

const server = http.createServer(app)
server.listen(3000)

server.on('listening', () => {
	const addr = server.address()
	const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

	console.log(`Server is listening on ${bind}`)
})
