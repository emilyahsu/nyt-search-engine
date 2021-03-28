import React, { useEffect, useState } from "react";
import { StyleSheet,
        Text,
        View,
        SafeAreaView,
        Keyboard,
        TouchableWithoutFeedback,
        ActivityIndicator} from "react-native";
import { Images, Colors, Metrics } from "../Themes";
import APIRequest from "../Config/APIRequest";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { material } from "react-native-typography";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ navigation }) {

  useEffect(() => {
    const onboard = async () => {
          try {
              const status = await AsyncStorage.getItem('FirstTime');
              if (status !== null) {
                navigation.navigate('Search');
              }
          } catch (e) {
              console.error(e);
          }
      }

    onboard();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Search') }>
    <SafeAreaView style={styles.container}>
      <Text style={styles.onboarding}>Welcome to the New York Times search engine! </Text>
      <Text style= {{textAlign: 'center', margin: Metrics.baseMargin}}>This is a powerful app that allows you to search for news articles
      from the New York Times database and pull up the article with a single click.</Text>
      <Text> Tap anywhere to continue. </Text>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
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
