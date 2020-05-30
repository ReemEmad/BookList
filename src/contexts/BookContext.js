import React, { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "book1", author: "author1", id: 1 },
    { title: "book2", author: "author2", id: 2 },
    { title: "book3", author: "author3", id: 3 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books], { title, author, id: uuidv4() });
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContextProvider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContextProvider>
  );
};

export default BookContextProvider;
