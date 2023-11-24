import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Slider from './src/components/Slider';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
