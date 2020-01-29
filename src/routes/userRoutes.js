import { Router } from 'express'

//Instanciate Router
const router = Router()

import {getUsers,
		getUser,
		createUser,
		deleteUser,
		updateUser} from '../controllers/userController'

//To List all Users

router.route('/')
	.get(getUsers)
	.post(createUser)

//To Insert a User
router.route('/:id')
	.get(getUser)
	.delete(deleteUser)
	.put(updateUser)
	

export default router