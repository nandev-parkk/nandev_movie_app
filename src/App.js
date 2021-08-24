import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/353px-Pink_lady_and_cross_section.jpg",
  },
  {
    name: "kimchi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/330px-Various_kimchi.jpg",
  },
  {
    name: "juice",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/330px-Orange_juice_1.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((list) => {
        return <Food name={list.name} picture={list.image} />;
      })}
    </div>
  );
}

export default App;
