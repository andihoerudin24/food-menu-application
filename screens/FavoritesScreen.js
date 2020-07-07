import React from 'react';
import { View,Text,StyleSheet, Platform} from 'react-native'
import Color from '../constant/Color';
import MealList from '../components/Meallist'
import {MEALS} from '../data/dummy-data'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoriteScreen =  props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return  <MealList listData= {favMeals} navigation={props.navigation}  />
}

export const NavigationOptions = (navData) =>{
    return {
        headerTitle: 'Your Favorite',
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
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
}

const styles = StyleSheet.create({
   screen:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   }
})

export default FavoriteScreen