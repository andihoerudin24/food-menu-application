import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { HeaderTitle } from "@react-navigation/stack";
import Color from "../constant/Color";

const CategoriScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.GridItem}
        onPress={() => {
          props.navigation.navigate("CategoriMealScreen");
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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

export const ScreenOption  = navData =>{
   return{
    headerTitle:'Meal Categori',
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
  GridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriScreen;
