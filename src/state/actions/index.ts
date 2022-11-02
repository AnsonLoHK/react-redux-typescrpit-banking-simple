import { ActionType } from "../action-type/index";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}
interface WithdrawtAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawtAction | BankruptAction;
