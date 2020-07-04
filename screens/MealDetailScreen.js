import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import Color from "../constant/Color";
const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back Categori"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

export const NavigationOptions = (NavData) => {
  const mealid = NavData.route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealid);
  return {
    headerTitle: selectedMeal.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("mark as favorite");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
