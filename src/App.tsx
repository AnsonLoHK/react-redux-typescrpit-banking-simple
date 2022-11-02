import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators } from "./state";
import { IRootState } from "./state/reducers";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // TODO: 調用 Reducer中的bank reducer
  const amount = useSelector((state: IRootState) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(-500)}>withdrawMoney</button>
      <button onClick={() => bankrupt()}> bankrupt</button>
    </div>
  );
}

export default App;
