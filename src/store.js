import { createStore } from 'redux';
import boardReducer from './reducers/boardReducer'
// const initialState = {
//     result:1
// };

const store = createStore(boardReducer);

export default store;