import React, { useEffect, useState } from "react";
import { StyleSheet,
        Text,
        View,
        SafeAreaView,
        Keyboard,
        TouchableWithoutFeedback,
        ActivityIndicator} from "react-native";
import { Images, Colors, Metrics } from "./App/Themes";
import APIRequest from "./App/Config/APIRequest";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { material } from "react-native-typography";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from "./App/Components/Logo";
import News from "./App/Components/News";
import Search from "./App/Components/Search";
import SearchScreen from "./App/Components/SearchScreen";
import ArticleScreen from "./App/Components/ArticleScreen";
import OnboardingScreen from "./App/Components/OnboardingScreen";

const Stack = createStackNavigator();

export default function App(){


  return (
        <NavigationContainer>
          <Stack.Navigator screenOptions = {{
            headerTitle: () => <Logo/>,
            headerBackTitleVisible: false
          }}>
            <Stack.Screen name = "Onboarding" component={OnboardingScreen}/>
            <Stack.Screen name = "Search" component={SearchScreen}/>
            <Stack.Screen name = "Article" component={ArticleScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  onboarding: {
    fontSize: 24,
    margin: Metrics.baseMargin,
    fontWeight: '300',
    textAlign: 'center'

  }

});
