import React from 'react';

function Food({ name }) {
  return <h3>I love {name}</h3>
}

const foodILike = [
  { name: "kimchi" },
  { name: "ramen" },
  { name: "chicken" },
  { name: "pizza" }
]
function renderFood(dish) {
 
  return <Food name={dish.name} />

}

function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}


    </div>

  );
}

export default App;
