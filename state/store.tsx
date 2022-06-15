import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { MainReducer } from "./mainReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["main"],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        main: MainReducer,
    }),
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

const state = store.getState;

export type State = ReturnType<typeof state>;

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
