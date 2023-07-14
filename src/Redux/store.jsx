import { configureStore } from "@reduxjs/toolkit";

import suggestionReducer from "../Redux/slices/suggestionSlice";
import searchReducer from "../Redux/slices/searchSlice";
import userReducer from "../Redux/slices/userSlice";

const store = configureStore({
    reducer: {
        suggestions: suggestionReducer,
        search: searchReducer,
        users: userReducer,
    },
});

export default store;