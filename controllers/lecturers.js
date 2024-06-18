const {addLecturers,updateLecturers,deleteLecturers,getLecturersbyphone, getAllLecturers} = require('../services/lecturersService')
const express = require('express')
const router = express.Router()
// get all Lecturers
router.get('/',async(req,res)=>{
    try {
        const records = await getAllLecturers()
        res.status(200).json(records)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// get lecturers by phone
router.get('/:phone',async(req,res)=>{
    try {
        const phone = req.params.phone
        const records = await getLecturersbyphone(phone)
        res.status(200).json(records[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// delete Lecturer by id
router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const results =await deleteLecturers(id)
        res.status(200).json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// update or edit Lecturer record
router.put('/',async(req,res)=>{
    try {
        const {name, phone, email,id}=req.body
        const response  = await updateLecturers(name, phone, email,id)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// create new Lecturer
router.post('/',async(req,res)=>{
    try {
        const {name, phone, email}=req.body
        const response  = await addLecturers(name, phone, email)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})

module.exports=router