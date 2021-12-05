# Learning GraphQL

### Schema

Represents the contract, or agreed structure of available data between server and client.

### Query

Structure of the data that client requires from the server. Needs to have root field that corresponds to the field in the Schema on server.
Query can pass arguments by using simple brackets () and list of parameters which are also declared in the Schema.

### Mutation

Mutation is actually a way to access CRUD (without R) in order to create, update and delete data.
Structure is the same as for the Query, but you need to pass values for the fields you want to update.
These values are passed by using simple brackets (). To retrieve data from that very same request you can state fields in the Mutation body like you do in the Query.

### Subscription

Subscription opens and holds steady connection between server and client, in order to send new data once it's updated in the database.
Solved the problem of real-time updates for the client.

### Resolver

Resolver is a function that corresponds to one field described in the Queries.
Resolver handles data fetching, creating, updating or deleting.

### Resources

- How to GraphQL - https://www.howtographql.com/basics/2-core-concepts/
- FreeCodeCamp YouTube compilation - https://www.youtube.com/watch?v=ed8SzALpx1Q
- Apollo React docs - https://www.apollographql.com/docs/react/data/mutations/
