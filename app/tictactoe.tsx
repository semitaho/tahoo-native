import Grid from '@/components/tictactoe/Grid';
import { GameContext, GameContextType } from '@/state/GameState';
import React, { useContext, useState } from 'react';
import { FlatList, GestureResponderEvent, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';



interface GridProps {
  char: string;
  onPress: (event: GestureResponderEvent) => void;
  // Define any props the Grid component might need here
}

const rowColCount = 10;
const CHARACTER_TO_USE_RANDOM = Math.random() > 0.5 ? "X" : "O";

const Game: React.FC<GridProps> = ({ char, onPress }) => {
  const [  state, setGameState ] = useContext(GameContext) as GameContextType;

  const { grid: data, name } = state;

  function toggleClick(index: number): void {
    const newData = [...data];
    newData[index] =
      newData[index] === CHARACTER_TO_USE_RANDOM ? "" : CHARACTER_TO_USE_RANDOM;
    setGameState({
      ...state,
      grid: newData,
      name: 'Toni'
    });
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Image
        source={require("@/assets/images/linkedinkuva.jpeg")}
        style={styles.reactLogo}
      />
    </View>

    <View style={styles.infoContainer}>
      <Text>Hei {name}!</Text>

    </View>

    <View style={styles.tictoeContainer}>
      <FlatList
        numColumns={rowColCount}
        style={styles.flatlist}
        data={data}
        renderItem={({ item, index }) => (
          <Grid char={item} onPress={() => toggleClick(index)}></Grid>
        )}
      />
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
    marginBottom: 15,
  },

  flatlist: {
    flex: 1,
    borderBlockColor: "black",
    width: "100%",
  },

  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    flex: 2,
    flexDirection: "row",
  },

  tictoeContainer: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  reactLogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  flatlistItem: {},
});

export default Game;