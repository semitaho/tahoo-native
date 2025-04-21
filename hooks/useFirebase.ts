import { useEffect, useState } from "react";
import { database } from "./../app/firebase.config";
import {
  DatabaseReference,
  limitToLast,
  get,
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
      setData(state);
    });
    return () => unsubscribe();
  }, []);
  return data;
};

export const useAvailableGame = (): string => {
  const [game, setGame] = useState<string>("");
  useEffect(() => {
    const gameRef = ref(database, "tictactoe/games");
    const latest = query(gameRef, orderByChild("updated desc"), limitToLast(1));
    const unsubscribe = onValue(latest, (snapshot) => {
      const state = snapshot.val();
      console.log("Game state refreshed:", state);
      const games = Object.keys(state);
      setGame(games[0]);
    });
    return () => unsubscribe();
  });
  return game;
};

export const getGame = (gameRef: string): Promise<GameState> => {
  const gameRefPromise = ref(database, "tictactoe/games/" + gameRef);
  return get(gameRefPromise).then((snapshot) => {
    const state = snapshot.val();
    console.log("Game state acquired:", state);
    return state;
  });
};

export const updateGame = (gameRef: string, gameState: GameState): Promise<GameState> => {
  const gameRefPromise = ref(database, "tictactoe/games/" + gameRef);
  return set(gameRefPromise, gameState).then(() => {
    console.log("Game updated successfully, id: " + gameRef);
    return gameState;
  });
};
  


export const create = (gameState: GameState): Promise<string> => {
  const gameRef = ref(database, "tictactoe/games");
  const newGameRef = push(gameRef);
  return set(newGameRef, gameState).then(() => {
    console.log("Game created successfully, id: " + newGameRef.key);
    return newGameRef.key as string;
  });
};
