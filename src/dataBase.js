import MongoClient from 'mongodb';



//DataBase 
export async function connect() {
	try {
		const users = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
		const db = users.db('user-restapi');
		console.log('DB is connected');
		return db;
	} catch (e) {
		console.log(e);
	}
};


