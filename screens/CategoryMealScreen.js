import React from 'react';
import { View,Text,StyleSheet,Button} from 'react-native'

const CategoriMealScreen =  props => {
   return(
       <View style={styles.screen}>
           <Text>The CatgeoriMeal Screen</Text>
           <Button title="Go To Detail" onPress={()=>{
               props.navigation.navigate('MealDetailScreen')
           }} />
           <Button title="Go Back" onPress={()=>{
               props.navigation.pop();
           }} />
       </View>
   )
}

const styles = StyleSheet.create({
   screen:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   }
})

export default CategoriMealScreen