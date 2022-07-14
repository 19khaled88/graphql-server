const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const client = require('./dbconfig/index')
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
} = require('graphql')

var app = express()

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    price: { type: GraphQLInt },
  },
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: {
      people: {
        type: GraphQLList(PersonType),
        resolve: (root, args, context, info) => {
          const db = client.db('graphql')
          const data = db.collection('documents').find().toArray()
          return data
        },
      },
      person: {},
    },
  }),
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
)
app.listen(4000, () => {
  console.log('Listening at http://localhost:4000')
})
