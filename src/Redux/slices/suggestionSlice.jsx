import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "John Doe",
        avatar: "https://example.com/avatar1.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isFollowing: false,
    },
    {
        id: 2,
        name: "Jane Smith",
        avatar: "https://example.com/avatar2.jpg",
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        isFollowing: false,
    },
    // Add more suggested people here...
];

const suggestionSlice = createSlice({
    name: "suggestions",
    initialState,
    reducers: {
        followUser: (state, action) => {
            const { userId } = action.payload;
            const user = state.find((user) => user.id === userId);
            if (user) {
                user.isFollowing = true;
            }
        },
    },
});

export const { followUser } = suggestionSlice.actions;
export default suggestionSlice.reducer;
