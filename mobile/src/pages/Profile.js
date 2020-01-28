import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview'

// import { Container } from './styles';

export default function Profile({ navigation }) {
  const githubUserName = navigation.getParam('github_username')

  return <WebView style={{ flex: 1 }} source={{ uri: `http://github.com/${githubUserName}` }}/>
}
