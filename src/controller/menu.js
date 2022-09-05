import Menu from '../models/Menu.js'

//were gonna add export to export multiply functions from this file we dont need defualt because this will be mmore than one module
 export const getMenu = async (req, res) => { //make sure to add the Async

    try{
        const data = await Menu.findAll()

        res.json(data)

    }catch(err){
        console.log(err)
        res.json("error in the router.get")

    }
}

export const postMenu =  async (req, res) => {

    console.log(req.body)
 
    console.log(req.body.item)
 
    console.log(req.body.name)
 
    //these objects are being sent because we want the front end to use it for views these object are in javascript
    res.json({ item: req.body.item, name:req.body.name, message:"added"})
 
 }