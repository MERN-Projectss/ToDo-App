
const {dirModel}= require("../model/toDoModel")
const { isValidName , isValidValue} = require("../vallidaters/validators")

const dirList = async(req,res)=>{
    try {
        const list = await dirModel.find()
        list = Object.keys(list)
        return res.status(200).send({ status: true, Message: "List of all items in directory- ", list })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const createDir = async (req, res) => {
    try {
        let data = req.body
        let { title ,description } = data
        if (!title || !isValidValue(title)) return res.status(400).send({ status: false, message: " title is required " })

        //checking email entered by user is Valid or not?
        if (!isValidName(title)) return res.status(400).send({ status: false, message: `this title=> ${title} is not valid` })

        if (!description || !isValidValue(description)) return res.status(400).send({ status: false, message: " description is required " })

        const dirInfo = await dirModel.create(data)

        res.status(201).send({ status: true, Message: "item created successfully - ", dirInfo })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const removeDir = async(req,res)=>{
    try {
        let title = req.body.title

        if (!title || !isValidValue(title)) return res.status(400).send({ status: false, message: " title is required " })

        //checking title entered by user is Valid or not?
        if (!isValidName(title)) return res.status(400).send({ status: false, message: `this title=> ${title} is not valid` })
        

        let findItem = await dirModel.findOne({title:title})
   if(!findItem) return res.status(400).send({ status: false, message: `this title ${title} is not exists` })
        
        findItem.remove()
        console.log(findItem)
        return res.status(200).send({ status: true, Message: "Document removed successfully --- ", findItem })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = {createDir ,removeDir ,dirList}

