const graphql = require('graphql')
const ObjectId = require('mongodb').ObjectId
const { UpdateUser } = require('../../TypeDefs/UserType')
const client = require('../../../dbconfig/index')
const { GraphQLString, GraphQLInt } = graphql
module.exports.UpdateUser = {
  type: UpdateUser,
  args: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    price: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    var id = new ObjectId(args._id)
    const db = client.db('graphql')
    const notId = delete args._id
    const data = await db
      .collection('documents')
      .updateOne({ _id: id }, { $set: args }, { upsert: true })

    return {
      success: true,
      message: 'Update Successful',
    }
  },
}
