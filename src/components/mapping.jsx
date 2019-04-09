import React from "react";
//import { Shop } from "./components/mapping";
// Now, we need to add a key to each dynamically rendered child,
// so this serves as a unique identifier, which will help track which of
// these components are updating, and rendering with React.
export let magazineList = [
  { title: "What is this", author: "Khan Mabo", pages: 440 },
  { title: "Your body and my desire", author: "Mr Lover", pages: 339 },
  { title: "Water in the moon", author: "Amazing Man", pages: 540 }
];
const Magazine = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>page: {pages}</p>
    </section>
  );
};
export const Shop = ({ magazines }) => {
  return (
    <div>
      {magazines.map((magazine, i) => (
        <Magazine
          key={i}
          title={magazine.title}
          author={magazine.author}
          pages={magazine.pages}
        />
      ))}
    </div>
  );
};
