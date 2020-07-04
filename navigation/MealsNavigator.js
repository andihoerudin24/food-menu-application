import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import CategoriScreen,{ScreenOption as ScreenOptionCategori}  from '../screens/CategoriesScreen'
import CategoriMealScreen,{ScreenOption as ScreenOptionMealScreen}  from '../screens/CategoryMealScreen'
import MealDetailScreen,{NavigationOptions as ScreenOptionMealDetail }  from '../screens/MealDetailScreen'

const Stack = createStackNavigator();

const Navigation = () =>{
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriScreen} options={ScreenOptionCategori} />
          <Stack.Screen name="CategoriMealScreen" component={CategoriMealScreen} options={ScreenOptionMealScreen} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={ScreenOptionMealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigation