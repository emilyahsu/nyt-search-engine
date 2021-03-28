import React from "react";
import { WebView } from "react-native-webview";

export default function ArticleScreen({route, navigation}) {
  const {uri} = route.params;

  return (
    <WebView
       source={{uri: uri}}/>
  );
}
