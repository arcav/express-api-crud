import {connect} from '../dataBase'
import { ObjectID } from 'mongodb'


// GET ALL 
export async function getAll(req, res ) {
	const db = await connect()
	const result= await db.collection('users').find({}).toArray();
	res.json(result);	
};

//GET ONE
export async function getOne(req, res){
	const { id } = req.params;;
	const db = await connect()
	const result= await db.collection('users').findOne({ _id: ObjectID(id) });
	res.json(result);
};

//CREATE ONE
export async function createOne(req, res){
	const db = await connect()
	const user =   {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	};  
	const result= await db.collection('users').insertOne(user)
	res.json(result.ops[0]);
};


//DELETE ONE
export async function deleteOne (req, res){
	const { id } = req.params;
	const db = await connect()
	const result= await db.collection('users').deleteOne({ _id: ObjectID(id) });
	res.json({
		message: `User ${id} deleted`,
		result
	})
};

//UPDATE ONE
export async function updateOne(req, res){
	const { id } = req.params;
	const updateUser =  {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	}; 
	const db = await connect()
	const result = await db.collection('users').updateOne({ _id: ObjectID(id) }, {$set: updateUser});
	res.json({
		message: `User ${id} Updated`,
		result
	});
};

