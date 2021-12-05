import React, { useState } from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";

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

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }  
`;

const addBookQuery = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }  
`;

export const AddBook = () => {
  const [addBook] = useMutation(addBookQuery);
  const {data} = useQuery(getAuthorsQuery);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addBook({
      variables: {
        name,
        genre,
        authorId: author,
      },
      refetchQueries: [
        { query: getBooksQuery }
      ]
    });
  };

  return (
    <div className="add-book">
      <form onSubmit={(e) => formSubmit(e)}>
        <div>
          <label>Book name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Book genre:</label>
          <input
            type="text"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        {
          data?.authors && <div>
            <label>Author:</label>
            <select
              onChange={(e) => setAuthor(e.target.value)}
            >
              {
                data.authors.map((author) => {
                  return (<option key={author.id} value={author.id}>{author.name}</option>)
                })
              }
            </select>
          </div>
        }

        <button>Add book</button>
      </form>
    </div>
  );
}
