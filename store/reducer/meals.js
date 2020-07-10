const { MEALS } = require("../../data/dummy-data")

const intialState ={
    meals:MEALS,
    filterMeal:MEALS,
    favoriteMeal:[]
}

const mealsReducer = (state=intialState,action)=>{
    return state
}

export default mealsReducer;