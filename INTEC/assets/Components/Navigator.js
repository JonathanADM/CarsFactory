import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import CarsList from "./CarsList";

const Stack = createNativeStackNavigator();

const AppNavigator = () =>(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} ></Stack.Screen>
            <Stack.Screen name="CarsList" component={CarsList} options={{title: "Cars Factory", headerStyle: {backgroundColor: 'darkred'}, headerTintColor: 'white'}}/>
        </Stack.Navigator>
    </NavigationContainer>
)
export default AppNavigator