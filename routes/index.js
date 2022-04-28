import express from "express";
const router= express.Router()
import employecontroller from '../controller/employecontroller.js'





/*
router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/edit',(req,res)=>{
    res.render('edit')
})
*/

router.get('/',employecontroller.getdata)
router.post('/',employecontroller.submitdoc)
router.get('/edit/:id',employecontroller.editdata)
router.post('/update/:id',employecontroller.updatedocbyid)
router.post('/delete/:id',employecontroller.deletedocbyid)



export default router