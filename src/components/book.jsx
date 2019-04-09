import React, { Component } from "react";
const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  );
};
export const Library = () => {
  return (
    <div>
      <Book title="The Notebook" author="Sageer Shahzad" pages={310} />
    </div>
  );
};
