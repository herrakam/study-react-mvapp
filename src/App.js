import React from 'react';

function Food({ fav }) {
  return <h3>I love {fav}</h3>
}

function App() {
  return (
    <div className="App">
      아 귀찮
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="1" />
      <Food fav="2" />

    </div>

  );
}

export default App;
