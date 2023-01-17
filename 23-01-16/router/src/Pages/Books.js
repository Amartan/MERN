import React, { useState } from "react";
import { useParams } from "react-router-dom";

const books = [
  { id: 1, bookName: "Car" },
  { id: 2, bookName: "Product" },
  { id: 3, bookName: "Dog" },
];
export default function Book() {
  const { id } = useParams();
  const [data, setData] = useState(books.filter((e) => e.bid == id));
  const { bid, bookName } = data[0];
  return (
    <div>
      <div>
        <h2>Book {e.id}</h2>
        <p>Name {e.bookName}</p>
        <p>Author</p>
        <p>Published year</p>
      </div>
    </div>
  );
}
