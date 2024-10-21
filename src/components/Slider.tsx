import React from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
const {height} = Dimensions.get('window');

const Slider = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={() => console.log('done')}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../images/anu-gold-leaf.jpg')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fe6e58',
            image: <Image source={require('../images/anu-gold-leaf.jpg')} />,
            title: 'The Title',
            subtitle: 'This is the subtitle that sumplements the title.',
          },
          {
            backgroundColor: '#999',
            image: <Image source={require('../images/anu-gold-leaf.jpg')} />,
            title: 'Triangle',
            subtitle: "Beautiful, isn't it?",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    color:'blue',
    backgroundcolor:'orange',

  },
});

export default Slider;
