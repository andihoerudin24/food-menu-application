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
import DefaultText from "../components/DefaultText";
const CategoriMealScreen = (props) => {
  const CatId = props.route.params.categoryId;

  const avaliableMeals = useSelector(state => state.meals.filterMeal)
 
  const displayMeals = avaliableMeals.filter(
    (meal) => meal.ctagoryId.indexOf(CatId) >= 0
  );
  if(displayMeals.length === 0){
     return(
       <View style={styles.content}>
         <DefaultText> No Meal Found, maybe check your filters?</DefaultText>
       </View>
     )
  }
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
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default CategoriMealScreen;
