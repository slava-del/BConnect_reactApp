// import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import HomeScreen from '../screens/homeScreen';
// import CategoriesScreen from '../screens/categoriesScreen';
// import MapViewScreen from '../screens/mapViewScreen';
// import AccountQ from '../screens/accountQ';

// const Tab = createMaterialBottomTabNavigator();

// const NavigationBar = () => {
//   return (
    // <Tab.Navigator
    //   initialRouteName="Acasă"
    //   activeColor="#00273D"
    //   inactiveColor="#00273D"
    //   barStyle={{ backgroundColor: '#D2EBF4', height: 75}}
    //   shifting={true}
    // >
//       <Tab.Screen
//         name="Acasă"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Acasă',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Categorii"
//         component={CategoriesScreen}
//         options={{
//           tabBarLabel: 'Căutare',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="briefcase-search" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Hartă"
//         component={MapViewScreen}
//         options={{
//           tabBarLabel: 'Hartă',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="map" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Cont"
//         component={AccountQ}
//         options={{
//           tabBarLabel: 'Cont',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default NavigationBar;




// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Animated } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import HomeScreen from '../screens/homeScreen';
// import CategoriesScreen from '../screens/categoriesScreen';
// import MapViewScreen from '../screens/mapViewScreen';
// import AccountQ from '../screens/accountQ';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   const scaleValues = {
//     "Acasă": new Animated.Value(0),
//     "Categorii": new Animated.Value(0),
//     "Hartă": new Animated.Value(0),
//     "Cont": new Animated.Value(0),
//   }

//   const animateIconSize = (routeName, focused) => {
//     Animated.timing(scaleValues[routeName], {
//       toValue: focused ? 1.2 : 1,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   };

//   return (
//     <Tab.Navigator
//       initialRouteName="Acasă"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color }) => {
//           let iconName;

//           if (route.name === 'Acasă') {
//             iconName = 'home';
//           } else if (route.name === 'Categorii') {
//             iconName = 'briefcase-search';
//           } else if (route.name === 'Hartă') {
//             iconName = 'map';
//           } else if (route.name === 'Cont') {
//             iconName = 'account';
//           }

//           animateIconSize(route.name, focused);

//           return (
//             <Animated.View style={{ transform: [{ scale: scaleValues[route.name] }] }}>
//               <MaterialCommunityIcons name={iconName} color={color} size={26} />
//             </Animated.View>
//           );
//         },
//         tabBarActiveTintColor: '#00273D',
//         tabBarInactiveTintColor: '#00273D',
//         tabBarStyle: { display: 'flex' },
//         headerShown: false,
//       })}
//     >
//       <Tab.Screen name="Acasă" component={HomeScreen} />
//       <Tab.Screen name="Categorii" component={CategoriesScreen} />
//       <Tab.Screen name="Hartă" component={MapViewScreen} />
//       <Tab.Screen name="Cont" component={AccountQ} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;





import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/homeScreen';
import CategoriesScreen from '../screens/categoriesScreen';
import MapViewScreen from '../screens/mapViewScreen';
import AccountScreen from '../screens/accountScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colors = {
    "Acasă": "#7bc5d8",
    "Categorii": "#7bc5d8",
    "Hartă": "#7bc5d8",
    "Cont": "#7bc5d8",
  }

  return (
    <Tab.Navigator
      initialRouteName="Acasă"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Acasă') {
            iconName = 'home';
          } else if (route.name === 'Categorii') {
            iconName = 'briefcase-search';
          } else if (route.name === 'Hartă') {
            iconName = 'map';
          } else if (route.name === 'Cont') {
            iconName = 'account';
          }

          return (
            <View style={{
              width: 60, 
              height: 40,
              backgroundColor: focused ? colors[route.name] : "#D2EBF4",
              borderColor: focused ? colors[route.name] : "#D2EBF4",
              borderWidth: 1,
              borderRadius: focused ? 10 : 0, // border radius only when tab is selected
              justifyContent: 'center', 
              alignItems: 'center' ,
              marginTop: 0,
            }}>
              <MaterialCommunityIcons name={iconName} color={focused ? "#00273D" : "#00273D"} size={26} />
            </View>
          );
        },
        tabBarActiveTintColor: '#00273D',
        tabBarInactiveTintColor: '#00273D',
        tabBarStyle: { backgroundColor: '#D2EBF4', height: 70 },
        tabBarLabelStyle: {
          fontSize: 12, 
          marginBottom: 5,
          fontWeight: 'bold',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Acasă" component={HomeScreen} />
      <Tab.Screen name="Categorii" component={CategoriesScreen} />
      <Tab.Screen name="Hartă" component={MapViewScreen} />
      <Tab.Screen name="Cont" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;


