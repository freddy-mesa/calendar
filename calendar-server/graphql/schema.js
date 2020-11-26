const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Event {
    id: ID!
    title: String!
    date: String!
  }
  input InputEvent {
    id: ID!
    title: String!
    date: String!
  }
  type Query {
    events: [Event]
    event(id: ID): Event
  }
  type Mutation {
    createEvent(data: InputEvent!): Event
    updateEvent(data: InputEvent!): Event
    deleteEvent(id: ID!): ID
  }
`);

module.exports = schema;