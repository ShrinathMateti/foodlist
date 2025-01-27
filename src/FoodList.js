import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      food: "",
    };
  }

  readFood = (e) => {
    this.setState({ food: e.target.value });
  };

  addFood = () => {
    this.setState((prevState) => ({
      foods: [...prevState.foods, prevState.food],
      food: "",
    }));
    console.log(this.state.food);
  };

  deleteFood = () =>{
    this.setState(()=>({
      foods:[],
      food:''
    })
      
    )
  }

  render() {
    return (
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter Food Name"
          value={this.state.food}
          onChange={this.readFood}
          className="border-danger"
        />
        <button className="bg-danger text-white mb-3" onClick={this.addFood}>
          Add Food
        </button>
        <ul>
          {this.state.foods.map((food, index) => (
            <li key={index} className="list-group-item fw-bold text-danger">
              {food} <button className="bg-danger text-white mb-2" onClick={this.deleteFood}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FoodList;
