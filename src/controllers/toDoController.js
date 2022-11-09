
const {itemModel,dirModel}= require("../model/toDoModel")
const { isValidName , isValidValue} = require("../vallidaters/validators")


const createItem = async (req, res) => {
    try {
        let data = req.body
        let { title ,description } = data
        if (!title || !isValidValue(title)) return res.status(400).send({ status: false, message: " title is required " })

        //checking email entered by user is Valid or not?
        if (!isValidName(title)) return res.status(400).send({ status: false, message: `this title=> ${title} is not valid` })

        if (!description || !isValidValue(description)) return res.status(400).send({ status: false, message: " description is required " })

        //checking email entered by user is Valid or not?
        if (!isValidName(description)) return res.status(400).send({ status: false, message: `this description=> ${description} is not valid` })

        const toDoInfo = await itemModel.create(data)

        res.status(201).send({ status: true, Message: "toDo item created successfully - ", toDoInfo })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}



const markAsDone = async (req, res) => {
    try {
        let data = req.body
        let { title ,mark } = data
        if (!title || !isValidValue(title)) return res.status(400).send({ status: false, message: " title is required " })

        //checking email entered by user is Valid or not?
        if (!isValidName(title)) return res.status(400).send({ status: false, message: `this title=> ${title} is not valid` })
        
       const findItem = await itemModel.findOneAndUpdate({title : title},  {$set:{mark:true}}).select({title:1, description:1,mark:1, createdAt:1,updatedAt:1,"__v" :1})

        res.status(201).send({ status: true, Message: "Marked as done - ", findItem })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const unMarkAsDone = async (req, res) => {
    try {
        let data = req.body
        let { title ,mark } = data
        if (!title || !isValidValue(title)) return res.status(400).send({ status: false, message: " title is required " })

        //checking title entered by user is Valid or not?
        if (!isValidName(title)) return res.status(400).send({ status: false, message: `this title=> ${title} is not valid` })
        
       const findItem = await itemModel.findOneAndUpdate({title : title},  {$set:{mark :false}}).select({title:1, description:1,mark:1, createdAt:1,updatedAt:1,"__v" :1})

        res.status(201).send({ status: true, Message: "Marked as not done - ", findItem })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const moveToDirectory = async(req,res)=>{
    try {
        let title = req.body.title

        if (!title || !isValidValue(title)) return res.status(400).send({ status: false, message: " title is required " })

        //checking title entered by user is Valid or not?
        if (!isValidName(title)) return res.status(400).send({ status: false, message: `this title=> ${title} is not valid` })
        

        let findItem = await itemModel.findOne({title:title})
   if(!findItem) return res.status(400).send({ status: false, message: `this title ${title} is not exists` })
        
        let findItemInDir = await dirModel.find(findItem)
        findItem.remove()
        console.log(findItem)
        return res.status(200).send({ status: true, Message: "Document moved successfully --- ", findItemInDir })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const itemList = async(req,res)=>{
    try {
        const list = await itemModel.find()
        return res.status(200).send({ status: true, Message: "List of all ToDo items- ", list })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
module.exports = {createItem ,markAsDone ,unMarkAsDone,moveToDirectory ,itemList}

