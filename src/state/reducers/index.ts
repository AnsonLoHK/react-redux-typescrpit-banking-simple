import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducers = combineReducers({ bank: bankReducer });

export default reducers;
// TODO: 定義 reducers 的類型
export type IRootState = ReturnType<typeof reducers>;
