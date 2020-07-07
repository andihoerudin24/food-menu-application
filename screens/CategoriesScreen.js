import React from "react";
import {
  StyleSheet,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriGridTile from "../components/CategoryGridtile";
import Color from "../constant/Color";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

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
    headerTintColor:Platform.OS === 'android' ? 'white' : Color.primaryColor,
    headerLeft:() =>{
       return(
         <HeaderButtons  HeaderButtonComponent={HeaderButton}>
           <Item title="Menu" iconName="ios-menu" onPress={()=>{
               navData.navigation.openDrawer();
           }} color="white"/>
         </HeaderButtons>
       )
    },
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

export default CategoriScreen;
