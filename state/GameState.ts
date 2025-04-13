import React from "react";
import GameAction from "./GameAction";

interface GameState {
  grid: string[],
  name: string,
  actions: GameAction[],
  updated: number
}
const rowColCount = 10;
export const initialGameState: GameState = {
  grid: Array(rowColCount * rowColCount).fill(''),
  name: 'Zinni',
  actions: [ ],
  updated: Date.now()
};

export type GameContextType = [GameState, React.Dispatch<React.SetStateAction<GameState>>];

export const GameContext =  React.createContext<GameContextType | null>(null);
export default GameState;