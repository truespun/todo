import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
export default class Database {
  async connect () {
    mongoose.connect(`${process.env.MONGODB_URI}`)
    mongoose.connection.on('error', (err) => {
      console.log('Cannot connect to DB', { action: 'start', error: err.message })
    })
    mongoose.connection.on('open', () => {
      console.log('Connected to DB', { action: 'start' })
    })
  }

  async disconnect () {
    await mongoose.disconnect()
  }
}
