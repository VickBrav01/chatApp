import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchResults: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        search: (state, action) => {
            const searchQuery = action.payload;
            // Perform search logic here and update the searchResults state
            // You can use APIs or any other method to fetch search results

            // For example, let's assume the searchResults are updated with an array of search items
            state.searchResults = [
                { id: 1, name: "Result 1" },
                { id: 2, name: "Result 2" },
                // Add more search results
            ];
        },
    },
});

export const { search } = searchSlice.actions;
export const selectSearchResults = (state) => state.search.searchResults;
export default searchSlice.reducer;
