import React, {useReducer} from 'react';

import './App.css';

import reducer, {initialState} from './reducers';
import {addOne, applyNumber, changeOperation, clearDisplay, memoryReset, setMemory} from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const clickDispatchNum = num => {
    dispatch(applyNumber(num))
  }

  const clickDispatchOperator = operator => {
    console.log(operator)
    dispatch(changeOperation(operator))
  }

  const clickClearDisplay = () => {
    dispatch(clearDisplay())
  }

  const clickMemoryReset = () => {
    dispatch(memoryReset())
  }

  const clickSetMemory = () => {
    dispatch(setMemory(state.total))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => clickSetMemory()} />
              <CalcButton value={"MR"} onClick={() => clickDispatchNum(state.memory)} />
              <CalcButton value={"MC"} onClick={() => clickMemoryReset()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => clickDispatchNum(1)} />
              <CalcButton value={2} onClick={() => clickDispatchNum(2)} />
              <CalcButton value={3} onClick={() => clickDispatchNum(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => clickDispatchNum(4)} />
              <CalcButton value={5} onClick={() => clickDispatchNum(5)} />
              <CalcButton value={6} onClick={() => clickDispatchNum(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => clickDispatchNum(7)} />
              <CalcButton value={8} onClick={() => clickDispatchNum(8)} />
              <CalcButton value={9} onClick={() => clickDispatchNum(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => clickDispatchOperator('+')} />
              <CalcButton value={"*"} onClick={() => clickDispatchOperator('*')} />
              <CalcButton value={"-"} onClick={() => clickDispatchOperator('-')} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clickClearDisplay()} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
