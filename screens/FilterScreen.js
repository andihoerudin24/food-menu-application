import React, { useState,useEffect,useCallback } from "react";
import { View, Text, StyleSheet, Button, Platform, Switch,YellowBox  } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Color from "../constant/Color";
import { CommonActions } from '@react-navigation/native';


YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Color.primaryColor }}
        thumbColor={Platform.OS == "android" ? Color.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setIsisVegetarian] = useState(false);

  const saveFilters = useCallback(() =>{
      const appliedFilters ={
        glutenFree:isGlutenFree,
        lactoseFree:isLactoseFree,
        vegan:isVegan,
        vegetarian:isVegetarian
      }
      console.log(appliedFilters);
  },[isGlutenFree,isLactoseFree,isVegan,isVegetarian])

  useEffect(()=>{
    props.navigation.dispatch(CommonActions.setParams({ user: saveFilters }));
  },[saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Screen / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={(newValue) => setisLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setisVegan(newValue)}
      />
      <FilterSwitch
        label="Vegatarian"
        state={isVegetarian}
        onChange={(newValue) => setIsisVegetarian(newValue)}
      />
    </View>
  );
};

export const NavigationOptions = (NavData) => {
  return {
    headerTitle: "FilterScreen",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              NavData.navigation.openDrawer();
            }}
            color="white"
          />
        </HeaderButtons>
      );
    },
    headerRight:() =>{
      return(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={
            NavData.route.params?.user ?? 'defaultValue'
          }
          color="white"
        />
      </HeaderButtons>
      )
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans",
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical:10
  },
});

export default FilterScreen;
