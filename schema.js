const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql')

//payload type
const PayloadType = new GraphQLObjectType({
  name: 'payload',
  fields: () => ({
    payload_id: { type: GraphQLString },
    nationality:  { type: GraphQLString },
    manufacturer:  { type: GraphQLString },
    payload_type:  { type: GraphQLString },
    payload_mass_lbs: { type: GraphQLString }
  })
})

//rocket type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

//root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    payloads: {
      type: new GraphQLList(PayloadType),
      resolve(parent, args) {
        //get data from spacex api
        return axios.get('https://api.spacexdata.com/v3/payloads')
          .then(res => res.data)
      }
    },

    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        //get data from spacex api
        return axios.get('https://api.spacexdata.com/v3/rockets')
          .then(res => res.data);
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
