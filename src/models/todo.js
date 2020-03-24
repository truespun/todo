import * as mongoose from 'mongoose'


const TodoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    creator: {
        type: String,
        required: true
    }
}, {timestamps: true})


export default mongoose.model('Todo', TodoSchema)
