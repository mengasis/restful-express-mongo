import express from 'express'
import { list, find, create, update, remove } from '../controllers/battles'
const router = express.Router()

router.get('/', list)
router.get('/:id', find)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
