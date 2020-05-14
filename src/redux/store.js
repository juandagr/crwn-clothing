import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

/**
 * middlewares
 */
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

/**
 * Sagas
 */
import rootSaga from "./root-saga";

/**
 * Reducer
 */
import rootReducer from "./root-reducer";

/**
 * saga middleware to run asyn functions in the reducers
 */
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

/**
 * persistor to store session user data
 */
export const persistor = persistStore(store);

export default { store, persistor };
