import React from 'react';
import propTypes from "prop-types";

function Food({ name, rating }) {
  return <div>
    <h3>I love {name}</h3>
    <h3>my rating is {rating}/5.0 </h3>
  </div>
}


Food.propTypes = {
  name: propTypes.string.isRequired,
  rating: propTypes.number

}
class App extends React.Component {
  state = {
    count: 0
  }


  render() {


    return (
      <div>
        <h1>the number is: {this.state.count}</h1>
        <button onClick={this.Add}>Add</button>
        <button onClick={this.Minus}>Minus</button>
      </div>)
  }
  Add = () => {
    console.log("add")
  }
  Minus = () => {
    console.log("minus")
  }
}


export default App;
