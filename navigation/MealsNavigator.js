import React from 'react'
import { NavigationContainer,StackActions  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import CategoriScreen,{ScreenOption as ScreenOptionCategori}  from '../screens/CategoriesScreen'
import CategoriMealScreen,{ScreenOption as ScreenOptionMealScreen}  from '../screens/CategoryMealScreen'
import MealDetailScreen,{NavigationOptions as ScreenOptionMealDetail }  from '../screens/MealDetailScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavoriteScreen,{NavigationOptions as ScreenOptionFavorite}  from '../screens/FavoritesScreen'
import Color from '../constant/Color';
import  {Ionicons}  from '@expo/vector-icons'
import { Platform } from 'react-native';
 
const Stack = createStackNavigator();
const Navigations = () =>{
    return(
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriScreen} options={ScreenOptionCategori} />
          <Stack.Screen name="CategoriMealScreen" component={CategoriMealScreen} options={ScreenOptionMealScreen} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={ScreenOptionMealDetail} />
        </Stack.Navigator> 
    )
}

const StackFavotites = createStackNavigator()
const FavNavigator = () =>{
      return(
        <StackFavotites.Navigator>
          <StackFavotites.Screen name="FavoriteScreen" component={FavoriteScreen} options={ScreenOptionFavorite} />  
        </StackFavotites.Navigator>
      )
}
 
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeColor:Color.accentColor,
      barStyle :{
        backgroundColor:Color.primaryColor
      },
    }}>
      <Tab.Screen name="MealDetailScreen" component={Navigations} options={{
        tabBarIcon:(tabInfo) =>{
            return <Ionicons name='ios-restaurant' size={25}  color='white' />
        },
        tabPress: e => {
          if (route.state && route.state.routeNames.length > 0) {
              navigation.navigate('Device')
          }
      },
      }} />
      <Tab.Screen name="Favorite"  component={FavNavigator} options={{
        tabBarIcon:(tabInfo) =>{
          return <Ionicons name='ios-star' size={25}  color='white' />
         },
         
      }} />
    </Tab.Navigator>
  );
}


export default (Navigator = () => {
  return (
    <NavigationContainer>
      <MealsFavTabNavigator />
    </NavigationContainer>
  );
});
