import React from "react";
import { useSelector } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Color from "../constant/Color";
import MealList from "../components/Meallist";
const CategoriMealScreen = (props) => {
  const CatId = props.route.params.categoryId;

  const avaliableMeals = useSelector(state => state.meals.filterMeal)
 
  const displayMeals = avaliableMeals.filter(
    (meal) => meal.ctagoryId.indexOf(CatId) >= 0
  );
  return (
      <MealList  listData={displayMeals} navigation={props.navigation} />
  );
};

export const ScreenOption = (navData) => {
  const CatId = navData.route.params.categoryId;
  const selected = CATEGORIES.find((cat) => cat.id === CatId);
  return {
    headerTitle: selected.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle:{
      fontFamily:'open-sans'
    }
  };
};

const styles = StyleSheet.create({
  
});

export default CategoriMealScreen;
