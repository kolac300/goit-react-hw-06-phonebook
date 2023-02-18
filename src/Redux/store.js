import { createStore } from 'redux';
import { rootReducer } from './reducer';
const { devToolsEnhancer } = require('@redux-devtools/extension');

const enchancer = devToolsEnhancer();
export const store = createStore(rootReducer, enchancer);
