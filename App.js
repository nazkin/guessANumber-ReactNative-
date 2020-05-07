import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './pages/StartGame';



export default function App() {
  return (
    <View style={styles.container}>
      <Header title="pickA-n#mber"/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
