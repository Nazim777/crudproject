import express from "express";
const app= express()
const port = process.env.port || 5000
import database from './db/connectdb.js'
import router from './routes/index.js'
import {join} from 'path'
//import {employedata} from './model/employesdata.js'

//view engine connections
app.set('view engine','ejs')
//for using static file
app.use('/',express.static(join(process.cwd(),'public')))

//middlewear
app.use(express.urlencoded({extended:false}))
//database connections
database()

// model
//employedata()
//router connect
app.use(router)
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})