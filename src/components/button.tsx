import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const Button = ({title, onPress}: {title: string; onPress: () => void}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    backgroundColor: '#6c5ce7',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#f5f6fa',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
