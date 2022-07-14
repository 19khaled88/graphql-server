const graphql = require('graphql')
const { UserLocationType } = require('../TypeDefs/UserType')
const { GraphQLList } = graphql
module.exports.UserLocation = {
  type: new GraphQLList(UserLocationType),
  resolve(parent, args) {
    let data = [
      { name: 'khaled', city: 'Chittagong', country: 'Bangladesh' },
      { name: 'khaled ahasan', city: 'Dhaka', country: 'Bangladesh' },
      { name: 'Ahasan', city: 'Barisal', country: 'Bangladesh' },
    ]
    return data
  },
}
