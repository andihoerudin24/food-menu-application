import React from "react";
import { View, Text, StyleSheet, Button,Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Color from "../constant/Color";


const CategoriMealScreen = (props) => {
  const CatId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === CatId);
  return (
    <View style={styles.screen}>
      <Text>The CatgeoriMeal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go To Detail"
        onPress={() => {
          props.navigation.navigate("MealDetailScreen");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

export const ScreenOption = navData =>{
    const CatId = navData.route.params.categoryId;
    const selected= CATEGORIES.find(cat => cat.id === CatId)
    return{
        headerTitle:selected.title,
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Color.primaryColor : '' ,
         },
         headerTintColor:Platform.OS === 'android' ? 'white' : Color.primaryColor
    }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriMealScreen;
