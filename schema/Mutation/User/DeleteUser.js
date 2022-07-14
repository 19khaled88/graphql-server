const graphql = require('graphql')
const ObjectId = require('mongodb').ObjectId
const { DeleteUser } = require('../../TypeDefs/UserType')
const client = require('../../../dbconfig/index')
const { GraphQLString, GraphQLInt } = graphql
module.exports.DeleteUser = {
  type: DeleteUser,
  args: {
    _id: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    var id = new ObjectId(args._id)
    const db = client.db('graphql')
    const data = await db.collection('documents').deleteOne({ _id: id })
    return {
      success: true,
      message: 'Delete Successful',
    }
  },
}
