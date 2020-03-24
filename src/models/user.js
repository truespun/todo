import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }

}, { timestamps: false })

export default mongoose.model('User', UserSchema)
