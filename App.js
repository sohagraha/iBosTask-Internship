import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppBar from './components/appBar/AppBar';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <View>
      <AppBar />
      <MainPage />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

