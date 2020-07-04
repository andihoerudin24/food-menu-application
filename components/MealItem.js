import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{uri:props.image}} style={styles.bgImage} >
            <View style={styles.titleContainer}>    
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    overflow:'hidden',
    borderRadius:10,
    marginVertical:10
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems:'center',
    height:'15%'
  },
  bgImage:{
      width:'100%',
      height:'100%',
      justifyContent:'flex-end'

  },
  titleContainer:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingVertical:5,
    paddingHorizontal:12,
  },
  title:{
      fontFamily:'open-sans-bold',
      fontSize:22,
      color:'white',
      textAlign:'center'
  }
});

export default MealItem;