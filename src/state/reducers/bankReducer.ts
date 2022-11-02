import { Action } from "../actions/index";
import { ActionType } from "../actionType";

const initialState = 0;

export const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state + action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};
