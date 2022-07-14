const graphql = require('graphql')
const { UserLocation } = require('./Queries/UserLocation')
const { User } = require('./Queries/User')
const { UserDetail } = require('./Queries/UserDetails')
const { UserAdd } = require('./Mutation/User/AddUser')
const { UpdateUser } = require('./Mutation/User/UpdateUser')
const { DeleteUser } = require('./Mutation/User/DeleteUser')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql

const RootQuery = new GraphQLObjectType({
  //   RootQuery: new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    codeImprove: User,
    userLocation: UserLocation,
    userDetails: UserDetail,
  },
})

const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    createUser: UserAdd,
    updateUser: UpdateUser,
    deleteUser: DeleteUser,
  },
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })
