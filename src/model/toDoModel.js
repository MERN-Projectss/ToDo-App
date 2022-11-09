const { Schema, mongoose } = require("mongoose");

const toDoSchema = new Schema({

    title: {
        type: String, required: true, trim: true
    },

    description: {
        type: String, trim: true
    },
    mark :{ type : Boolean , default : null},

    moved :{ type : Boolean , default : null},

    // Date : {type: String , default :null  },

    // Time : {type: String , default :null}

}, { timestamps: true });

module.exports.itemModel = mongoose.model("ToDo-item", toDoSchema) //todo-items
module.exports.dirModel = mongoose.model("Directory", toDoSchema) //directory



