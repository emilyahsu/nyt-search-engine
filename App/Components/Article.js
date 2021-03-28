import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { material } from "react-native-typography";
import Metrics from "../Themes/Metrics";
import { useNavigation } from "@react-navigation/native";


export default function Article(props) {

const navigation = useNavigation();

  return (
          <Pressable onPress={() => navigation.navigate('Article', {uri: props.url})}>
            <View style={styles.container}>
              <Text style={material.title}>{props.title}</Text>
              <Text style={material.body1}>{props.snippet}</Text>
              <Text style={material.body2}>{props.byline}</Text>
              <Text style={material.caption}>{props.date}</Text>
            </View>
        </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    marginHorizontal: Metrics.marginHorizontal,
    borderBottomWidth: 1,
    borderBottomColor: "#c5c5c5"

  },

});
