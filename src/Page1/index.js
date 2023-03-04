import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Page1 = () => {
  const navigation = useNavigation();
  const [isInflated, setIsInflated] = useState(false);
  const [balloonSize, setBalloonSize] = useState(new Animated.Value(100));

  const handlePress = () => {
    setIsInflated(true);
    Animated.timing(balloonSize, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('Page2');
    });
  };

  const balloonStyle = {
    width: balloonSize,
    height: balloonSize,
    borderRadius: balloonSize.interpolate({
      inputRange: [100, 200],
      outputRange: [50, 100],
    }),
    backgroundColor: 'orange',
    marginTop: 50,
  };

  const circleStyle = {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: isInflated ? 'white' : 'red',
    borderWidth: 2,
    borderColor: 'black',
    position: 'absolute',
    bottom: isInflated ? 175 : 25,
    left: isInflated ? 0 : 25,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Inflate Balloon</Text>
      </TouchableOpacity>
      <Animated.View style={balloonStyle}>
        <View style={circleStyle} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Page1;
