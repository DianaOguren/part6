import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const Statistics = () => {
  let all = store.getState().good + store.getState().ok + store.getState().bad
  let avarage = (store.getState().good*1+store.getState().ok*0+store.getState().bad*(-1))/all;
  let newValue = (isNaN(avarage) ? 0 : (avarage));
  let pos = (store.getState().good/all)*100;
  let positive = (isNaN(pos) ? 0 : (pos));
  
  const StatisticLine = ({text, value, sign}) => {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>{text}</td>
              <td>{value}{sign}</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
  
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good:" value ={store.getState().good} />
      <StatisticLine text="ok:" value ={store.getState().ok} />
      <StatisticLine text="bad:" value ={store.getState().bad} />
      <StatisticLine text="total number:" value ={all} />
      <StatisticLine text="average score:" value ={newValue} />
      <StatisticLine text="positive feedback:" value ={positive} sign="%"/>
    </div>
  );
}

const App = () => {

  return (
    <div className="feedback">
      <h1>Give feedback</h1>
      <button onClick={e => store.dispatch({ type: 'GOOD' })}>good</button> 
      <button onClick={e => store.dispatch({ type: 'OK' })}>ok</button> 
      <button onClick={e => store.dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>reset stats</button>

      <div>
        <Statistics />
      </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)