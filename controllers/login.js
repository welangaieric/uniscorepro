// import the log in module
const loginService = require('../services/loginservice')
const express = require('express')
const router = express.Router()
// first login route
router.post('/',async(req,res)=>{
    const {email,password} = req.body
    // use the login module to authenticate user
    const result = await loginService.authUser(email,password)
    console.log(result)
    try {      
        // get users role 
        const role =result.data.role
        //check each role and server the required page
        if(role==='admin'){
            //render the admin page 
            res.render('admin',{message:result.message,data:result.data})
            return
        }
        if(role==='student'){
              //render the student page 
            res.render('student',{message:result.message,data:result.data})
            return
        }
        else{
              //render the lecture page 
            res.render('lecturer',{message:result.message,data:result.data})
            return
        }
    } catch (error) {
        // render login with error
        res.render('login',{message:result.message})
        return
    }
})
module.exports=router