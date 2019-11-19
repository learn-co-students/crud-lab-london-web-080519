import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => this.setState({text: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review)
    this.setState({text: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <input type="submit" />
      </form>
    );
  }
}

export default ReviewInput;
