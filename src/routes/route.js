const express = require("express")
const route = express.Router()

const {createItem ,markAsDone ,unMarkAsDone,moveToDirectory ,itemList} = require("../controllers/toDoController.js")
const {createDir ,removeDir ,dirList} =require("../controllers/directoryController")



route.post("/directory/list",dirList)

route.post("/directory/create",createDir)

route.post("/directory/remove",removeDir)

route.post("/todo-item/create",createItem)

route.post("/todo-item/mark-as-done",markAsDone)

route.post("/todo-item/mark-as-not-done",unMarkAsDone )

route.post("/todo-item/move-to-directory",moveToDirectory )

route.post("/todo-item/list",itemList)

module.exports = route