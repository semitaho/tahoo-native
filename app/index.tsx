import { useAvailableGame } from "@/hooks/useFirebase";

import { useCreateGame, useJoinGame } from "@/hooks/useAction";
import { GameContext } from "@/state/GameState";
import GameState from "@/state/GameState";
import { GameContextType } from "@/state/GameState";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GameButtonContainer from "./../components/container/GameButtonContainer";
import PrimaryButton from "@/components/common/PrimaryButton";
import TextField from "@/components/common/TextField";
import Title from "@/components/common/Title";

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },

  games: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const StartScreen = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");

  const game = useAvailableGame();

  function createGame() {
    useCreateGame(name).then((gameId) => {
      console.log("gameId: " + gameId);
      router.navigate("/tictactoe");
    });
  }

  function joinGame() {
    useJoinGame(game,name).then((gameId) => {
      console.log("gameId: " + gameId);
      router.navigate("/tictactoe");
    });
  }

  function onChangeText(name: string): void {
    console.log("name:" + name);
    setName(name);
  }

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Title>Welcome to Tic Tac Toe</Title>
        <TextField
          placeholder={"Anna nimesi"}
          onChangeText={onChangeText}
          value={name}
        ></TextField>
        <Text>Pelit: {game} </Text>

        <GameButtonContainer>
          <PrimaryButton disabled={name === ""} onPress={() => joinGame()}>
            Liity peliin
          </PrimaryButton>
          <PrimaryButton disabled={name === ""} onPress={() => createGame()}>
            Aloita peli
          </PrimaryButton>
        </GameButtonContainer>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;
