import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from './MealItem'
import {useSelector} from 'react-redux'
const Meallist = (props) => {
  const favoriteMeals = useSelector(state=> state.meals.favoriteMeal)
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
    return (
      <MealItem
        onSelectMeal={() => {
          props.navigation.navigate("MealDetailScreen", {
            mealId: itemData.item.id,
            mealTitle:itemData.item.title,
            isFav: isFavorite
          });
       
        }}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Meallist;
