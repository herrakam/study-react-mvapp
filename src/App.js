import React from 'react';

function Food({ name }) {
  return <h3>I love {name}</h3>
}

const foodILike = [
  { name: "kimchi" },
  { name: "ramen" },
  { name: "chicken" },
  { name: "pizza"}
]

function App() {
  return (
    <div className="App">
      {foodILike.map(function (dish) {
        return <Food name={dish.name} />
      })
      }


    </div>

  );
}

export default App;
