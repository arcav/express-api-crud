import { Router } from 'express'

//Instanciate Router
const router = Router()

//Import CRUD functions
import {
	getAll,
	getOne,
	createOne,
	deleteOne,
	updateOne
} from '../controllers/crudController'

//Static Routes
router.route('/')
	.get(getAll)
	.post(createOne)


//Dynamic Routes
router.route('/:id')
	.get(getOne)
	.delete(deleteOne)
	.put(updateOne)


export default router