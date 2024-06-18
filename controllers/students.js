const {addstudent,updatestudent,deletestudent,getstudentbyphone, getAllstudent} = require('../services/studentsService')
const express = require('express')
const router = express.Router()
// get all student
router.get('/',async(req,res)=>{
    try {
        const records = await getAllstudent()
        res.status(200).json(records)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
router.get('/:phone',async(req,res)=>{
    try {
        const phone = req.params.phone
        const records = await getstudentbyphone(phone)
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
        const results =await deletestudent(id)
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
        const {studentName,course, year,semester,stdAdm,id}=req.body
        const response  = await updatestudent(studentName,course, year,semester,stdAdm,id)
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
        const {studentName,course,year,semester,stdAdm}=req.body
        const response  = await addstudent(studentName,course,year,semester,stdAdm)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})

module.exports=router