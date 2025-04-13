import GameAction, { ActionType, Participant } from "@/state/GameAction";
import { create } from "./useFirebase";

export const useCreateGame = (playerName: string): Promise<string> => {
  const newGameData = {
    name: playerName,
    grid: Array(100).fill(""),
    actions: [
      {
        type: ActionType.CREATE_GAME,
        participant: Participant.CREATOR,
      },
    ],
    updated: Date.now(),
  };
  return create(newGameData);
};

export const useJoinGame = (gameRef: string): void {
  
}
