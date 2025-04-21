import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  Text,
  View,
  SafeAreaView,
  GestureResponderEvent,
  Modal,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import Grid from "@/components/tictactoe/Grid";
import { initialGameState } from "../../state/GameState";
import { SafeAreaProvider } from "react-native-safe-area-context";
const rowColCount = 10;

const DATA = Array(rowColCount * rowColCount).fill("");
const CHARACTER_TO_USE_RANDOM = Math.random() > 0.5 ? "X" : "O";
const GameContext = React.createContext({});
const HomeScreen= () => {
  const [data, setData] = useState(DATA);

  function toggleClick(index: number): void {
    const newData = [...data];
    newData[index] =
      newData[index] === CHARACTER_TO_USE_RANDOM ? "" : CHARACTER_TO_USE_RANDOM;
    setData(newData);
  }

  return (
   <></>
  );
}



HomeScreen.options = {
  headerBackTitle: 'jööti',
  title: 'keijo'
};
export default HomeScreen;