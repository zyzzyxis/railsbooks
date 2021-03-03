import React from 'react';
import Book from "./Book";

const Books = (props) => {
    const { books } = props;
    
    const renderBooks = () => {
      if (books.length === 0){
        return <h1>No Books Available</h1>;
      }
      return books.map((book) => {
        return <Book key={book.id} {...book} />;
      });
    };

    return (
      <div className="books-container">
        <h1>Books component</h1>
        {renderBooks()}
      </div>
    );

};

export default Books;