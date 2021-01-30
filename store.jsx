import { createStore, action, StoreProvider, useStoreActions, useStoreState } from 'easy-peasy';

export const store = createStore({
  game: {
    player: {
      name: 'Genesis'
    },
    setPlayer: action((states, player) => {
      states.player = {
        ...state.player,
        ...player
      }
    })
  },
  todos: {
    items: ['Create store', 'Wrap application', 'Use store'],
    add: action((states, payload) => {
      states.items.push(payload)
    })
  }
});