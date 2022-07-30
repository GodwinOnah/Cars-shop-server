const handleSignup=(req,res,db,bycrypt)=>{//registering a user

const hash=bcrypt.hashsync(req.body.password);

	db.transaction(trx=>{

		trx.insert({

			hash:hash,
			email:req.body.email  })

		.into('login')
		.returning('email')
		.then(loginEmail=>{

		return trx('customerdetails')
				.returnning('*').

				insert({
						
						name: req.body.name,
						phoe:,req.body.phone,
						email: req.body.email,
						address: req.body.address,
						password:req.body.password
						// entries:0,
						// joined: new Date()

				}).then(user=>{

			res.json(user[0]);

		})
		
		}).then(trx.commit)

		.catch(trx.rollback)

	})

	.catch(err=>res.status(400).json('Not registered'))

}

module.exports{
handleSignup:handleSignup;

}