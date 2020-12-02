//Express
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

//Rest Endpoint
const eventApi = require('./api/EventApi')

//GraphQL
const { graphqlHTTP } = require('express-graphql');
const gqlSchema = require('./graphql/schema')
const gqlResolver = require('./graphql/resolver')

//MongoDB
const db = require("./data");

const app = express()
const port = 4000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(cors({
  origin: 'http://localhost:3000'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Rest Endpoint
app.get('/', (req, res) => {
  res.send('Up && Running')
})
app.use("/events", eventApi);

//GraphQL Endpoint
app.use('/graphql', graphqlHTTP({
  schema: gqlSchema,
  rootValue: gqlResolver,
  graphiql: true,
}));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });