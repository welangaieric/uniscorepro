const {getAllusers,adduser,updateuser,deleteuser,getuserbyphone} = require('../services/userService')
const encrypt = require('./encrypt')
const express = require('express')
const sendMail = require('./sendMail')
const router = express.Router()
// get all users
router.get('/:role',async(req,res)=>{
    try {
        const records = await getAllusers(req.params.role)
        res.status(200).json(records)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// get one user by there phone
router.get('/:phone',async(req,res)=>{
    try {
        const phone = req.params.phone
        const records = await getuserbyphone(phone)
        res.status(200).json(records[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// delete user by id
router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const results =await deleteuser(id)
        res.status(200).json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// update or edit user record
router.put('/',async(req,res)=>{
    try {
        const {firstName, lastName, phone, email, password, role,id}=req.body
        const response  = await updateuser(firstName, lastName, phone, email, password, role,id)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// create new user
router.post('/',async(req,res)=>{
    try {
        const pass = Math.random().toString(36).slice(-8)
        const password =await encrypt(pass)
        console.log(password)
        const {firstName, lastName, phone, email, role}=req.body
        const response  = await adduser(firstName, lastName, phone, email, password, role)
        const message = `Hello ${firstName}, welcome to uniscore.\n Use the following credentials to log in \n email: ${email}\nPasscode: ${pass}`
     
        const subject ='New LogIn'
        sendMail(email,message,subject)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})

module.exports=router