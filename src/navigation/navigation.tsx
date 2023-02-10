import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'


import { Image } from 'react-native';
import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import StarverseNavigation from './StarVerseNavigation';


const Tab = createBottomTabNavigator()
export const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Favorite-tab' component={FavoriteNavigation} options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, focused, size}) => <Icon name="heart" color={color} size={size}
          />
        }}/>
        <Tab.Screen name='Home-tab' component={StarverseNavigation} options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) => renderLogo(focused, color)
        }}/>
        <Tab.Screen name='Account-tab' component={AccountNavigation} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, focused, size}) => <Icon name="user" color={color} size={size}
          />
        }}/>  
    </Tab.Navigator>
  )
}

function renderLogo (focused: boolean, color: string){
  return (
    <Image 
      source={require('../../assets/imperial-small.png')}
      style={{width:75, height:75, top:-15, tintColor:`${color}`}}
    />
  )
}
