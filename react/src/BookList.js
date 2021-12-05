import React from 'react';
import {gql, useQuery} from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }  
`;

export const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="book-list">
      <ul>
        {
          data?.books.map((book) => {
            return (<li key={book.id}>{book.name}</li>)
          })
        }
      </ul>
    </div>
  );
}
