
import {
  applyMiddleware,
  createStore,
} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './saga';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

// Middlewares setup
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer =
  applyMiddleware(
    sagaMiddleware,
  )

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middlewareEnhancer);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
