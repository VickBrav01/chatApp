import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: 1, name: "John Doe", profileImage: "https://example.com/profile1.jpg", following: false },
        { id: 2, name: "Jane Smith", profileImage: "https://example.com/profile2.jpg", following: true },
        // Add more users here
    ],
    selectedUser: null,
    chatVisible: false,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        followUser: (state, action) => {
            const { userId } = action.payload;
            const user = state.users.find((user) => user.id === userId);
            if (user) {
                user.following = true;
            }
        },
        unfollowUser: (state, action) => {
            const { userId } = action.payload;
            const user = state.users.find((user) => user.id === userId);
            if (user) {
                user.following = false;
            }
        },
        selectCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        openChatWindow: (state) => {
            state.chatVisible = true;
        },
        closeChatWindow: (state) => {
            state.chatVisible = false;
        },
    },
});

export const {
    followUser,
    unfollowUser,
    selectCurrentUser,
    openChatWindow,
    closeChatWindow,
} = userSlice.actions;

export default userSlice.reducer;