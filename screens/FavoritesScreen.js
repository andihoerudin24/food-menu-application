import React from 'react';
import { View,Text,StyleSheet, Platform} from 'react-native'
import Color from '../constant/Color';
import MealList from '../components/Meallist'
import {MEALS} from '../data/dummy-data'

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