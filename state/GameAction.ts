interface GameAction {
  type: ActionType;
  payload?: any;  
  participant: Participant
}

export enum ActionType {
  CREATE_GAME,
  JOIN_GAME

}

export enum Participant {
  JOINER,
  CREATOR,
  BOTH
}

export default GameAction;
