import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import Color from "../constant/Color";
import DefaultText from "../components/DefaultText";

const ListItem = props => { 
   return(
     <View style={styles.listItem}>
       <DefaultText>{props.children}</DefaultText>
     </View>
   )
}

const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
      <View>
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View> 
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredients =>(
          <ListItem key={ingredients}>{ingredients}</ListItem>
        ))}
        <Text style={styles.title}>Step</Text>
        {selectedMeal.steps.map(step =>(
          <ListItem key={step}>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

export const NavigationOptions = (NavData) => {
  const mealid = NavData.route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealid);
  return {
    headerTitle: selectedMeal.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("mark as favorite");
            }}
          />
        </HeaderButtons>
      );
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
   image:{
      width:'100%',
      height:200
   },
   details:{
     flexDirection:'row',
     padding:15,
     justifyContent:'space-around'
   },
   title:{
     fontFamily:'open-sans-bold',
     fontSize:22,
     textAlign:'center'
   },
   listItem:{
     marginVertical:10,
     marginHorizontal:20,
     borderColor:'#ccc',
     borderWidth:1,
     padding:10
   }
});

export default MealDetailScreen;
