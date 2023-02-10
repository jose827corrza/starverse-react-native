import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import { StarverseScreen } from './../screens/StarverseScreen';
import CharacterScreen from './../screens/CharacterScreen';

const Stack  = createStackNavigator()

export default function StarverseNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name={'Starverse'} component={StarverseScreen} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name={'Starverse Character'} component={CharacterScreen} options={{headerTitleAlign: 'center'}}/> 
    </Stack.Navigator>
  )
}