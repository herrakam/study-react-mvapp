import React from 'react';
import propTypes from "prop-types";

function Food({ name, rating }) {
  return <div>
    <h3>I love {name}</h3>
    <h3>my rating is {rating}/5.0 </h3>
  </div>
}

const foodILike = [
  { name: "kimchi", rating: 5 ,id:1},
  { name: "ramen", rating: 4.5,id:2 },
  { name: "chicken", rating: 3.8,id:3 },
  { name: "pizza", rating: 4.1,id:4 }
]

Food.propTypes = {
  name: propTypes.string.isRequired,
  rating: propTypes.number

}

function App() {
  return (
    <div className="App">
      {foodILike.map((dish, index) => (
        <Food
          name={dish.name}
          rating={dish.rating}
          key = {index} />
      ))}
    </div>
  );
}

export default App;
