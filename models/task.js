const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide the name"],
        trim: true,
        maxLength: [20, "length must be of atmost 20 characters"]
    },
    completed : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema);