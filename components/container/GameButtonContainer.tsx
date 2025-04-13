import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center'
  }
});


type ButtonProps = {
  children: ReactNode
};
const GameButtonContainer: React.FC<ButtonProps> = ( { children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default GameButtonContainer;