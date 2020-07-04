import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Color from "../constant/Color";
import MealItem from "../components/MealItem";
const CategoriMealScreen = (props) => {

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        onSelectMeal={() => {
          props.navigation.navigate('MealDetailScreen',{
            mealId:itemData.item.id
          })
        }}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };
  const CatId = props.route.params.categoryId;
  const displayMeals = MEALS.filter(
    (meal) => meal.ctagoryId.indexOf(CatId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriMealScreen;
