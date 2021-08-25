import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/353px-Pink_lady_and_cross_section.jpg",
    rating: 4.0,
  },
  {
    id: 2,
    name: "kimchi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/330px-Various_kimchi.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "juice",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/330px-Orange_juice_1.jpg",
    rating: 3.6,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((list) => {
        return (
          <Food
            key={list.id}
            name={list.name}
            picture={list.image}
            rating={list.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
