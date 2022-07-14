const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 4000
const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema/schema')
app.use(cors())

app.use(express.json())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

// app.get('/', (req, res) => {
//   let query = `{codeImprove {id,name,email,phone},userLocation{name,city,country}}`
//   graphql(schema, query).then((result) => {
//     res.json(result)
//   })
// })

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})

// const GraphQLSchema = require('graphql').GraphQLSchema
// const schema = require('./schema/schema')
// graphqlHTTP({
//   schema: new GraphQLSchema({}),
//   schema: schema,
//   graphiql: true,
// })
