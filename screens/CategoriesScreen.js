import React from "react";
import {
  StyleSheet,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriGridTile from "../components/CategoryGridtile";
import Color from "../constant/Color";

const CategoriScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoriGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate("CategoriMealScreen", {
            categoryId: itemData.item.id,
          });
        }}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

export const ScreenOption = (navData) => {
  return {
    headerTitle: "Meal Categori",
    headerStyle:{
      backgroundColor:Platform.OS === 'android' ? Color.primaryColor : '' ,
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : Color.primaryColor
  };
};

const styles = StyleSheet.create({
  
});

export default CategoriScreen;
