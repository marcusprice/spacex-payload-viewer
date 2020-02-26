# Spacex Payload Viewer
This is a simple application I built to learn about GraphQL. The schema is set up to grab payload and rocket data from Spacex's REST API, which is then distributed in a React app. GraphQL makes distributing the data required on the front end much simpler since you are able to request the exact data that's required for the client instead of a whole JSON response. It also saves on the response time since you are requesting less data.

## PayloadType
This is the GraphQL object type for payloads. The schema for PayloadType looks like this:

```
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
```

## RocketType
Check back - info for the this GraphQL object type is coming really soon.
