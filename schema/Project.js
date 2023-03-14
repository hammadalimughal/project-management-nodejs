const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    userId: {
        type: String
    },
    status: {
        type: String,
        default: "todo"
    },
    startWorking: {
        type: String
    },
    Completed: {
        type: String
    },
    featuredImage: {
        type: String
    },
    title: {
        type: String
    },
    tags: {
        type: Array
    },
    description: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});
const Project = mongoose.model('project',projectSchema)
module.exports = Project;