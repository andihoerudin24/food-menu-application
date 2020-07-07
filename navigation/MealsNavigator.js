import React from 'react'
import { NavigationContainer,StackActions  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import CategoriScreen,{ScreenOption as ScreenOptionCategori}  from '../screens/CategoriesScreen'
import CategoriMealScreen,{ScreenOption as ScreenOptionMealScreen}  from '../screens/CategoryMealScreen'
import MealDetailScreen,{NavigationOptions as ScreenOptionMealDetail }  from '../screens/MealDetailScreen'
import FilterScreen,{NavigationOptions as FilterOptions}  from '../screens/FilterScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen,{NavigationOptions as ScreenOptionFavorite}  from '../screens/FavoritesScreen'
import Color from '../constant/Color';
import  {Ionicons}  from '@expo/vector-icons'
import { Text } from 'react-native'
 

const Stack = createStackNavigator();
const Navigations = () =>{
    return(
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriScreen} options={ScreenOptionCategori} />
          <Stack.Screen name="CategoriMealScreen" component={CategoriMealScreen} options={ScreenOptionMealScreen} />
              <StackFavotites.Screen name="MealDetailScreen" component={MealDetailScreen} options={ScreenOptionMealDetail} />
        </Stack.Navigator> 
    )
}
const FilterStack = createStackNavigator();
const filterNavigations = () =>{
    return(
        <FilterStack.Navigator>
          <FilterStack.Screen name="FilterStack" component={FilterScreen} options={FilterOptions}  /> 
        </FilterStack.Navigator> 
    )
}

const StackFavotites = createStackNavigator()
const FavNavigator = () =>{
      return(
        <StackFavotites.Navigator>
          <StackFavotites.Screen name="FavoriteScreen" component={FavoriteScreen} options={ScreenOptionFavorite} />  
          <StackFavotites.Screen name="MealDetailScreen" component={MealDetailScreen} options={ScreenOptionMealDetail} />
        </StackFavotites.Navigator>
      )
}
 
const Tab =  createBottomTabNavigator();
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeColor:Color.accentColor,
      barStyle :{
        backgroundColor:Color.primaryColor
      }
    }}>
      <Tab.Screen name="Meal" component={Navigations} options={{
        tabBarIcon:(tabInfo) =>{
            return <Ionicons name='ios-restaurant' size={25}  color={Color.accentColor} />
        }
      }} />
      <Tab.Screen name="Favorite"  component={FavNavigator} options={{
        tabBarIcon:(tabInfo) =>{
          return <Ionicons name='ios-star' size={25}  color={Color.accentColor} />
         }
         
      }} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const MainNavigator = () =>{
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Meals" component={MealsFavTabNavigator} />
        <Drawer.Screen name="Filter" component={filterNavigations}  /> 
      </Drawer.Navigator>
    )
}

export default (Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
});
