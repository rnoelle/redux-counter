import { createStore } from 'redux';

import counter from './ducks/counter';

let Store = createStore(counter);


export default Store;
