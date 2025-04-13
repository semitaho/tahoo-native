import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { database } from "./../app/firebase.config";
import {
  DatabaseReference,
  limitToLast,
  onDisconnect,
  onValue,
  orderByChild,
  push,
  query,
  ref,
  remove,
  set,
  ThenableReference,
} from "@firebase/database";
import GameState from "@/state/GameState";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const gameRef = ref(database, "tictactoe/games");
    const unsubscribe = onValue(gameRef, (snapshot) => {
      const state = snapshot.val();
      console.log("Game state updated:", state);
      setData(state);
    });
    return () => unsubscribe();
  }, []);
  return data;
};

export const useAvailableGame = (): string => {
  const [game, setGame]= useState<string>("");
  useEffect(() => {
    const gameRef = ref(database, "tictactoe/games");
    const latest = query(gameRef, orderByChild("updated desc"), limitToLast(1));
    const unsubscribe = onValue(latest, (snapshot) => {
      const state = snapshot.val();
      console.log("Game state updated:", state);
      const games = Object.keys(state);
      setGame(games[0]);
    });
    return () => unsubscribe();
  });
  return game;
};

export const create = (gameState: GameState): Promise<string> => {
  const gameRef = ref(database, "tictactoe/games");
  const newGameRef = push(gameRef);
  return set(newGameRef, gameState).then(() => {
    console.log("Game created successfully, id: " + newGameRef.key);
    return newGameRef.key as string;
  });
}



