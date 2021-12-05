import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import React from 'react';
import {BookList} from "./BookList";
import {AddBook} from "./AddBook";

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache()
});

const Content = () => {
  return (
    <div id="App">
      <h2>Testing GraphQL</h2>

      <BookList />

      <hr/>

      <AddBook />
    </div>
  );
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Content />
    </ApolloProvider>
  )
}

export default App;
