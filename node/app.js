const express=require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt-nodejs');
const cors=require('cors');
const knex=require('knex');




const postgres=knex({//connecting to database using knex
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'Godwin',
    password : '',
    database : 'CarsDatabase'
  }
});


postgres.select('*').from('CarsDatabase').then(data=>{//selecting from database
		console.log(data);

})



const app=express();

app.use(bodyParser.json());
app.use(cors());




// const myDatabese={
// 		users:[
// 		{
// 				id: '1',
// 				name: 'Godwin',
// 				email: 'obande@gmail.com',
// 				password:'1234',
// 				entries:0,
// 				joined: new Date()

// 		},

// 		{
			
// 				id: '2',
// 				name: 'Sam',
// 				email: 'sam@gmail.com',
// 				password:'4321',
// 				entries:0,
// 				joined: new Date()

// 		}


// ]}




app.get('/',(req,res)=>{

		return res.send(myDatabese.users);
})








app.post('/login',(req,res)=>{//logging in a user

	if(req.body.email===myDatabese.users[0].email&&

		req.body.password===myDatabese.users[0].password
		){

			res.json('success');


	}

		else{
				res.status(404).json('error logging in');

		}
})









app.post('/singup',(req,res)=>{//registering a user

	const hash=bcrypt.hashsync(password);

	db.transaction(trx=>{

		trx.insert({

			hash:hash,
			email:email  })

		.into('login')
		.returning('email')
		.then(loginEmail=>{

		return db('CarsDatabase')
				.returnning().

				insert(
						id: '3',
						name: req.body.name,
						email: req.body.email,
						password:req.body.password,
						entries:0,
						joined: new Date()

				).then(user=>{

			res.json(user[0]);
		
		}).catch(err=>res.status(400).json('Not registered'))

})






app.get('/profile/:id',(req,res)=>{//using Id to fetch user

		db.select('*').from('CarsDatabase')
		.where({req.params.id})
		.then(user=>{

			if(user.length){
			res.json(user[0])
				}else{
						res.status(400).json('Not found')

				}

		}).catch(err=>res.status(400).json('erro getting user'))

	})








	// myDatabese.users.forEach(user=>{

	// 	if(user.id===req.params.id){

	// 		found=true;

	// 		return res.json(user);

		

		



app.post('/image',(req,res)=>{//Calculating entries after adding image



	db('CarsDatabase').where('id','=',req.body.id)
	.increament('entries',1)
	.returning('enteries')
	.then(entries=>{

			res.json(entries[0]);
	}).catch(err=>res.status(400).json('erro getting user'))
		})




		
	// myDatabese.users.forEach(user=>{

	// 	if(user.id===req.params.id){

	// 		found=true;
	// 		user.entries++;

	// 		return res.json(user.entries);

	// 	}
		
	

		

	






app.listen(3001,function(){

console.log("Sever running at port: 3001");

});