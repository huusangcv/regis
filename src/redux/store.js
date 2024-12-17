import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools();

export const store = createStore(persistedReducer, composeEnhancers);
export const persistor = persistStore(store);
