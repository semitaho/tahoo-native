import React from "react";
import GameAction from "./GameAction";
import User, { UserRole } from "./User";

interface GameState {
  grid: string[],
  joiner?: User,
  creator: User;
  actions: GameAction[],
  updated: number
}
const rowColCount = 10;


export type GameContextType = [GameState, React.Dispatch<React.SetStateAction<GameState>>];

export const GameContext =  React.createContext<GameContextType | null>(null);
export default GameState;