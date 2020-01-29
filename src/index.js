import server from './server';
import '@babel/polyfill/noConflict'

//Start Server
async function  main()  {
	 await server.listen(server.get('port'));
	 console.log('Server on port',server.get('port')); 	 
 };
 main();