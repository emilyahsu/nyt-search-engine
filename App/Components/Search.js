/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Jan, 2021
 */

import React, { useState } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Metrics, Colors } from "../Themes";
import { SearchBar } from "react-native-elements";

export default function Search(props) {
  const [text, setText] = useState("");

  const searchTerm = () => {
    if (text != '') {
      props.search(text,"");
      setText('');
    }
  };

  return (
    <View style={styles.textinputrow}>
      <TouchableOpacity onPress={searchTerm}>
        <FontAwesome5 name="search" size={20} style={styles.icon} color="red" />
      </TouchableOpacity>
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => setText(text)}
        value={text}
        onSubmitEditing={searchTerm}
      />
      <TouchableOpacity onPress={(text) => setText("")}>
        <FontAwesome5 name="times-circle" size={20} style={styles.icon} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  textinputrow: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: "#dedede",
    borderRadius: 10,
    alignItems:"center",
    justifyContent: 'space-between',
    width: Metrics.screenWidth *.9,
  },

  icon: {
    marginHorizontal: Metrics.marginHorizontal
  },

  textinput: {
    height: 40,
    width: '70%',
    borderRadius: 10
  },

});
