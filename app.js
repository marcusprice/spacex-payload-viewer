const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const port = process.env.PORT || 5000;
const schema = require('./schema');

//graphql express middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.use(express.static(__dirname + '/client/build'));

app.get('/', (req, res) => {
  res.send('/client/build/index.html');
});

app.listen(port, () => {
  console.log('listening on port ' + port)
});
