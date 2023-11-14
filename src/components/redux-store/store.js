import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducerFunction from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducerFunction);

const store = createStore(
  persistedReducer // pass the persisted reducer instead of rootReducer to createStore
);

const persistor = persistStore(store);

export { store, persistor };
