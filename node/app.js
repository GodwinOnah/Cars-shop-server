const express=require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt-nodejs');
const cors=require('cors');


const app=express();

app.use(bodyParser.json());
app.use(cors());




const myDatabese={
		users:[
		{
				id: '1',
				name: 'Godwin',
				email: 'obande@gmail.com',
				password:'1234',
				entries:0,
				joined: new Date()

		},

		{
			
				id: '2',
				name: 'Sam',
				email: 'sam@gmail.com',
				password:'4321',
				entries:0,
				joined: new Date()

		}


]}

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









app.post('/singu',(req,res)=>{//registering a user

	// bcrypt.hash(password,null,null,function(err,hash)){


	// }

		myDatabese.users.push({
				id: '3',
				name: req.body.name,
				email: req.body.email,
				password:req.body.password,
				entries:0,
				joined: new Date()

		})
})






app.get('/profile/:id',(req,res)=>{//using Id to fetch user

		let found =false;
	myDatabese.users.forEach(user=>{

		if(user.id===req.params.id){

			found=true;

			return res.json(user);

		}
		if(!found){

			res.status(404).json('no such user exist');
		}
	})

		
});



app.post('/image',(req,res)=>{//Calculating entries after adding image

		let found =false;
	myDatabese.users.forEach(user=>{

		if(user.id===req.params.id){

			found=true;
			user.entries++;

			return res.json(user.entries);

		}
		if(!found){

			res.status(404).json('no such user exist');
		}
	})

		})

	






app.listen(3001,function(){

console.log("Sever running at port: 3001");

});