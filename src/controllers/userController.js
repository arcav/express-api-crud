import {connect} from '../dataBase'
import { ObjectID } from 'mongodb'

export async function getUsers(req, res ) {
	const db = await connect();
	const result = await db.collection('users').find({}).toArray();
	console.log(result);
	res.json(result);	
};

export async function getUser(req, res){
	const { id } = req.params;
	const db = await connect();
	const result = await db.collection('users').findOne({ _id: ObjectID(id) });
	res.json(result)
};

export async function createUser(req, res){
	const db = await connect();
	const user = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	};
	const result = await db.collection('users').insertOne(user)
	res.json(result.ops[0]);
};

export async function deleteUser(req, res){
	const { id } = req.params;
	const db = await connect();
	const result = await db.collection('users').deleteOne({ _id: ObjectID(id) });
	res.json({
		message: `User ${id} deleted`,
		result
	})
};

export async function updateUser(req, res){
	const { id } = req.params;
	const updateUser = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	};
	const db = await connect();
	await db.collection('users').updateOne({ _id: ObjectID(id) }, {$set: updateUser});
	res.json({
		message: `User ${id} Updated`
	})
};