import { TOOGLE_FAVORITE, SET_FILTERS } from "../actions/meals";
const { MEALS } = require("../../data/dummy-data");

const intialState = {
  meals: MEALS,
  filterMeal: MEALS,
  favoriteMeal: [],
};

const mealsReducer = (state = intialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE:
      const existingIndex = state.favoriteMeal.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedMeals = [...state.favoriteMeal];
        updatedMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeal: updatedMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeal: state.favoriteMeal.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedfilteredMeal = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.IsLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.IsVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filterMeal: updatedfilteredMeal };
    default:
      return state;
  }
};

export default mealsReducer;
