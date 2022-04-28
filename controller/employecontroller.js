import employemodel from "../model/employesdata.js"

class employecontroller{

    
    static getdata=async(red,res)=>{
        try {
            const result= await employemodel.find()
            console.log(result)
            res.render('index',{result})
            
        } catch (error) {
            console.log(error)
            
        }
        

    }
    static editdata=async(req,res)=>{

        try {
           // console.log(req.params.id)

            const result = await employemodel.findById(req.params.id)
           console.log(result)
            res.render('edit',{result})
            
        } catch (error) {
            console.log(error)
            
        }
        
        
    }

    static submitdoc=async(req,res)=>{
       // console.log('req body working')
        //console.log(req.body)

        try {

            const   {name,position,salary } =req.body
            const data= new employemodel({
                name,position,salary
            })
            const result = await data.save()
            console.log(result)
            res.redirect('/')

        } catch (error) {
            console.log(error)
            
        }
    }
    static updatedocbyid=async(req,res)=>{
        try { 

            //console.log(req.params.id)
            //console.log(req.body)
           
            const result = await employemodel.findByIdAndUpdate(req.params.id,req.body)
            console.log(result)

            res.redirect('/')
        } catch (error) {
            console.log(error)
            
        }
       
      
    }
    static deletedocbyid= async(req,res)=>{
       
        try {
            // console.log(req.params.id)
            const result = await employemodel.findByIdAndDelete(req.params.id)
           // console.log(result)
            res.redirect('/')
            
        } catch (error) {
            console.log(error)
            
        }
        
       
    }
   


}
 export default employecontroller
