import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import ACTIONS from '../reducers/actions'


class ReviewsContainer extends Component {

  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews
})
const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: ACTIONS.ADD_REVIEW, review}),
  deleteReview: id => dispatch({type: ACTIONS.DELETE_REVIEW, id})
})



export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
