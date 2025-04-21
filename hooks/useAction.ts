import GameAction, { ActionType, Participant } from "@/state/GameAction";
import { create, getGame, updateGame } from "./useFirebase";
import GameState from "@/state/GameState";
import { UserRole } from "@/state/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useCreateGame = (name: string): Promise<string> => {
  const newGameData: GameState = {
    grid: Array(100).fill(""),
    creator: {
      name,
      role: UserRole.CREATOR,
    },
    actions: [
      {
        type: ActionType.CREATE_GAME,
        participant: Participant.CREATOR,
      },
    ],
    updated: Date.now(),
  };
  return create(newGameData)
    .then((gameRef) => {  
      return AsyncStorage.setItem("gameRef", gameRef)
      .then(() => gameRef);

    });
};

export const useJoinGame = (
  gameRef: string,
  name: string
): Promise<GameState> => {
  console.log("useJoinGame", gameRef, name);
  return getGame(gameRef).then((gameState) => {
    const joiner = {
      name,
      role: UserRole.JOINER,
    };
    const newGameState: GameState = {
      ...gameState,
      joiner,
      updated: Date.now(),
    };
    const action: GameAction = {
      type: ActionType.JOIN_GAME,
      participant: Participant.JOINER,
      payload: `${name} joined the game`,
    };
    newGameState.actions.push(action);
    console.log("newGameState", newGameState);
    return updateGame(gameRef, newGameState).then(() => {
      console.log("Game updated successfully" + newGameState);
      return newGameState;
    });
  });
};
