import React from 'react';
import ReactDOM from 'react-dom';
//import { SocketClient } from 'socket.io-client';
import * as io from 'socket.io-client';
import { useDrag } from 'use-react-gesture';
import { Spring } from 'react-spring';
import * as styled from 'styled-components'
import { createStore, action, StoreProvider, useStoreActions } from 'easy-peasy';
//import * as useMeasure from 'react-use';

const store = createStore({
  todos: {
    items: ['Create store', 'Wrap application', 'Use store'],
    add: action((state, payload) => {
      console.log(state, 'state')
      state.items.push(payload)
    })
  }
});
const App = styled.div`
  color: red;
  ul.list-buttons, ul li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  ul li {
    display: flex;
  }
`

function Main() {
  const add = useStoreActions(actions => actions.add);
  const alphabet = [...Array(26)].map((q,w)=>String.fromCharCode(w+97));
  
  const inputs = [];
  return <App>
  <button onClick={() => {
    console.log('press')
    add()
  }}>test</button>
    <ul className='list-buttons'>
      { alphabet.map((e, i) => {
        return <li>{e}{i + 1}</li>
      })}
     </ul>
  </App> 
} 

ReactDOM.render(
  <StoreProvider store={store}>
  <Main></Main>
  </StoreProvider>,
  document.getElementById('react-app')
);
