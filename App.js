import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import ReportCard from './screens/ReportCard'; 
import Calendar from './screens/Calendar'

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ label, icon, onPress, isFocused, focusedColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: isFocused ? focusedColor : 'white',
            height: 38,
            width: 38,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeNavigator = () => {

  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <HomeStack.Screen name="ReportCard" component={ReportCard} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

const CalendarNavigator = () => {

  const CalenderStack = createNativeStackNavigator();
  return (
    <CalenderStack.Navigator>
      <CalenderStack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
    </CalenderStack.Navigator>
  )
}


const ProfileNavigator = () => {

  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <ProfileStack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  )
}




const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          top: 722,
          bottom: 20,
          marginHorizontal: 20,
          height: 70,
          width : 335,
          borderRadius: 16,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarButton
                label="Home"
                icon={<Octicons name="home" size={24} color={focused ?  'white': 'black' } />}
                isFocused={focused}
                focusedColor="#978CD0" 
                onPress={() => {}}
              />
          ), headerShown: false
        }}
      />
      <Tab.Screen
        name="CalendarTab"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarButton
            label="Calendar"
            icon={<Feather name="calendar" size={24} color={focused ?  'white': 'black' } />}
            isFocused={focused}
            focusedColor="#978CD0" 
            onPress={() => {}}
          />
          ), headerShown: false
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarButton
            label="Profile"
            icon={<MaterialCommunityIcons name="account-box-outline" size={26}  color={focused ?  'white': 'black' } />}
            isFocused={focused}
            focusedColor="#978CD0" 
            onPress={() => {}}
          />
          ), headerShown: false
        }} />
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}



export default TabNavigator;

const styles = StyleSheet.create({})