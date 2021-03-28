import React, { useEffect, useState } from "react";
import { StyleSheet,
        Text,
        View,
        SafeAreaView,
        Keyboard,
        TouchableWithoutFeedback,
        ActivityIndicator,
        AsyncStorage} from "react-native";
import { Images, Colors, Metrics } from "../Themes";
import APIRequest from "../Config/APIRequest";

import Logo from "../Components/Logo";
import Search from "../Components/Search";
import News from "../Components/News";

export default function SearchScreen({ navigation }) {

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchText] = useState("");
  const [category] = useState("");

  const loadArticles = async (searchTerm = "", category = "") => {
    Keyboard.dismiss();
    setLoading(true);
    setArticles([]);
    var resultArticles = [];
    if (category === "") {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    setLoading(false);
    setArticles(resultArticles);
  };

  const updateOnboard = async () => {
          try {
              await AsyncStorage.setItem('FirstTime', 'false')
          } catch (e) {
              console.error(e);
          }
      }

  useEffect(() => {
    updateOnboard();
    loadArticles();
  }, []);

  const getArticleContent = () => {
    let contentDisplayed = null;

    if (loading) {
      contentDisplayed = <ActivityIndicator style={{justifyContent:'center'}} size="large" color="black"/>
    } else {
      contentDisplayed = <News data={articles}/>
    }

    return (
      <View style= {{flex:1, justifyContent: 'center'}}>
        {contentDisplayed}
      </View>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Search search={loadArticles}/>
        {getArticleContent()}
      </SafeAreaView>
    </TouchableWithoutFeedback >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
