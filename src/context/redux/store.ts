import {applyMiddleware, createStore, Middleware} from "redux";
import createSagaMiddleware from "redux-saga"
import {postReducer} from "../../reducers/posts/postReducer";
import {watcherPostSaga} from "../../sagas/PostSaga";

const sagaMiddlewares = createSagaMiddleware();

// middlewares to apply our global store
const middlewares: Middleware[] = [sagaMiddlewares];

// configure our global store
export const store = createStore( postReducer, applyMiddleware(...middlewares))

// run a saga-type middleware
sagaMiddlewares.run(watcherPostSaga);

