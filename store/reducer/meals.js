import { TOOGLE_FAVORITE } from "../actions/meals";
const { MEALS } = require("../../data/dummy-data")

const intialState ={
    meals:MEALS,
    filterMeal:MEALS,
    favoriteMeal:[]
}

const mealsReducer = (state=intialState,action)=>{
    switch(action.type){
        case TOOGLE_FAVORITE:
            const existingIndex = state.favoriteMeal.findIndex(meal=> meal.id === action.mealId)
            if(existingIndex >= 0){
                const updatedMeals = [...state.favoriteMeal]
                updatedMeals.splice(existingIndex, 1)
                return{...state,favoriteMeal:updatedMeals}
            }else{
                const meal = state.meals.find(meal =>  meal.id === action.mealId)
                return{...state, favoriteMeal:state.favoriteMeal.concat(meal)}
            }
          default:
              return state
    }
}

export default mealsReducer;