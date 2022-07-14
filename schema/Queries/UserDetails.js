const graphql = require('graphql')
const ObjectId = require('mongodb').ObjectId
const { UserType } = require('../TypeDefs/UserType')
const client = require('../../dbconfig/index')
const { GraphQLList, GraphQLString, GraphQLInt } = graphql
module.exports.UserDetail = {
  type: new GraphQLList(UserType),
  args: {
    _id: { type: GraphQLString },
  },
  resolve(parent, args) {
    var id = new ObjectId(args._id)
    const db = client.db('graphql')
    const data = db.collection('documents').find({ _id: id }).toArray()
    return data
  },
}
