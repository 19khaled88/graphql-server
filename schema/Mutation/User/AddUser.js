const graphql = require('graphql')
const { AddUser } = require('../../TypeDefs/UserType')
const client = require('../../../dbconfig/index')
const { GraphQLString, GraphQLInt } = graphql
module.exports.UserAdd = {
  type: AddUser,
  args: {
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    price: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    const db = client.db('graphql')
    const data = await db
      .collection('documents')
      .insertOne({ name: args.name, author: args.author, price: args.price })
    return {
      success: true,
      message: 'Added successfully',
    }
  },
}
