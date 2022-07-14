const MongoClient = require('mongodb').MongoClient

//Connection URL
const name = process.env.APP_USER_NAME
const pass = process.env.APP_USER_PASS
const url = `mongodb+srv://${name}:${pass}@cluster0.ka5da.mongodb.net/graphql?retryWrites=true&w=majority`
// const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url, { useUnifiedTopology: true })
client.connect(function (err) {
  console.log('Connection successful to server')
})

module.exports = client

// module.exports = { collection, db }

// how to import db configuration
// const client = require('../../dbConfig/index')

//how to use db connection
// const db = client.db('graphql')
// const data = await db.collection('documents').find().toArray()
