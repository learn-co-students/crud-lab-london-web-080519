import ACTIONS from "./actions";
import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case ACTIONS.ADD_RESTAURANT:
      const restaurant = {
        id: cuid(),
        text: action.text
      };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      };

    case ACTIONS.UPDATE_RESTAURANT:
      return {
        ...state,
        restaurants: state.restaurants.map(rest => {
          if (rest.id === action.payload.id) return action.payload;
          return rest;
        })
      };

    case ACTIONS.DELETE_RESTAURANT:
      return {
        ...state,
        restaurants: state.restaurants.filter(rest => rest.id !== action.id)
      };
    case ACTIONS.ADD_REVIEW:
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      };
      return { ...state, reviews: [...state.reviews, review] };

    case ACTIONS.UPDATE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map(rest => {
          if (rest.id === action.payload.id) return action.payload;
          return rest;
        })
      };

    case ACTIONS.DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(rest => rest.id !== action.id)
      };

    default:
      return state;
  }
}
