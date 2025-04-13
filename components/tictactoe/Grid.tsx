import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native';

interface GridProps {
  char: string;
  onPress: (event: GestureResponderEvent) => void;
  // Define any props the Grid component might need here
}

const Grid: React.FC<GridProps> = ({ char, onPress }) => {
  return (
    <View style={styles.grid} onTouchStart={onPress}>
      <Text style={styles.gridletter}>{char}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  grid: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    aspectRatio: 1, // Ensures height equals width
  },
  gridletter: {
    fontSize: 30,
    textAlign: "center",
  }
}  // Define any styles the Grid component might need here
);
export default Grid;