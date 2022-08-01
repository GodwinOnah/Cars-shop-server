
const handleLogin=(req,res,db,bcrypt)=>{//logging in a user

	const {email,password}=req.body;

	
	if(!email||!password){

			res.status(400).json('Wrong credencials')
	}

		db.select('email','hash').from('login')
			.where('email','=',req.body.email)
			.then(data=>{
							const isValid=bcrypt.compareSync(req.body.password,data[0].hash);
							if(isValid){

										return	db.select('*')
												.from('customerdetails')
												.where('email','=',req.body.email)
												.then(user=>{

															res.json(user[0])
															 })

												 				.catch(err=>res.status(400)
												 					.json('Not registered'))
												}
							else{
								res.status(400).json('Wrong credencials')}
								
						
	})


	.catch(err=>res.status(400).json('Wrong credencials'))


}

module.exports ={

	handleLogin:handleLogin

};
