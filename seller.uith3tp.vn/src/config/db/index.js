const mongoose = require('mongoose')
const URL = 'mongodb+srv://hoangtu45:123456789tu@cluster-mongo-test.pdqsm0o.mongodb.net/test'

const connect = async () => {
  try {
    await mongoose.connect(
      URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log('Connected to mongoDB')
  } catch (error) { 
    console.log(error)
    process.exit(1)
  }
}

module.exports = { connect };