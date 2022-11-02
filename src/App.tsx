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

  const amount = useSelector((state: IRootState) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => dispatch({ type: "increment-counter" })}>
        Deposit
      </button>
      <button>withdrawMoney</button>
      <button>bankrupt</button>
    </div>
  );
}

export default App;
