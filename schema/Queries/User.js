const graphql = require('graphql')
const { UserType } = require('../TypeDefs/UserType')
const client = require('../../dbconfig/index')
const { GraphQLList } = graphql
module.exports.User = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    const db = client.db('graphql')
    const data = db.collection('documents').find().toArray()
    return data
  },
}
