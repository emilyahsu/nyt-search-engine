import React, { useState, useCallBack } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Linking,
} from "react-native";
import { material } from "react-native-typography"; //consider using this!
import { Metrics, Colors } from "../Themes";
import * as WebBrowser from "expo-web-browser";
import Article from "../Components/Article";

export default function News(props) {
  const defaultProps = { articles: [] };

  const propTypes = {
    articles: PropTypes.array,
  };

  const renderItem = ({ item }) => {
    return (

        <Article
          url={item.url}
          title={item.title}
          snippet={item.snippet}
          byline={item.byline}
          date={item.date}
        />


    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
