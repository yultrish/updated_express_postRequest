const loginUser = async(req, res)=>{
    email = req.body.email
    password = req.body.password
    if(email === null || email === ''){
        res.status(303).json({message: 'email cannot empty'})
        return
    }

    if(password === null || password === ''){
        res.status(303).json({message: 'password cannot be empty'})
        return
    }

    //stimulating database
   
    if (!email || !email.includes('@gmail.com')){
        res.status(303).json({message: 'Please provide a valid Gmail address.'})
        return
    }else{
        res.status(200).json({
            name: 'Rashida',
            email: req.body.email,
            password: 'admin123' 

        })
    }

      if (!/\d/.test(password)) {
        return res.status(303).json({ message: 'Password must include at least one number' });
    }
 
}

module.exports.loginUser = loginUser;