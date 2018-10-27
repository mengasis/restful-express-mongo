import express from 'express'
import { list, getHeroe, create, update, remove } from '../controllers/heroes'

const router = express.Router()

router.get('/', list)
router.get('/:id', getHeroe)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
