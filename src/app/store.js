import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../features/cryptoApi";
import { cryptoNewsApi } from "../features/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
});
