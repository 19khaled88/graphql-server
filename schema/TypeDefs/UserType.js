const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLInt },
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLInt },
    author: {
      type: GraphQLString,
    },
    price: { type: GraphQLInt },
  }),
})

const UserLocationType = new GraphQLObjectType({
  name: 'location',
  fields: () => ({
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
  }),
})
const AddUser = new GraphQLObjectType({
  name: 'AddNotify',
  fields: () => ({
    success: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
})
const DeleteUser = new GraphQLObjectType({
  name: 'deleteNotify',
  fields: () => ({
    success: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
})
const UpdateUser = new GraphQLObjectType({
  name: 'updateNotify',
  fields: () => ({
    success: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
})
module.exports = { UserType, UserLocationType, DeleteUser, UpdateUser, AddUser }
