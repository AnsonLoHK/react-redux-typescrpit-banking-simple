import { Dispatch } from "redux";
import { ActionType } from "../action-type";
import { Action } from "../actions";

export function depositMoney(amount: number) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
}
export function withdrawMoney(amount: number) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
}
export function bankrupt(amount: number) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
}
