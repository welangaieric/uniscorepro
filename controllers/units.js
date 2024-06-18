const {addunit,updateunit,deleteunit,getunitByCode,getAllunits} = require('../services/unitsService')
const express = require('express')
const router = express.Router()
// get all units
router.get('/',async(req,res)=>{
    try {
        const records = await getAllunits()
        res.status(200).json(records)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// get unit by unitcode
router.get('/:code',async(req,res)=>{
    try {
        const code = req.params.code
        const records = await getunitByCode(code)
        res.status(200).json(records[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// delete unit by id
router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const results =await deleteunit(id)
        res.status(200).json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// update or edit unit record
router.put('/',async(req,res)=>{
    try {
        const {name, phone, email,id}=req.body
        const response  = await updateunit(name, phone, email,id)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})
// create new unit
router.post('/',async(req,res)=>{
    try {
        const {name, phone, email}=req.body
        const response  = await addunit(name, phone, email)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong'
        })
    }
})

module.exports=router