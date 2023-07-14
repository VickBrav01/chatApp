// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = [
// //     {
// //         id: 1,
// //         title: "Suggestion 1",
// //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //         image: "https://example.com/suggestion1.jpg",
// //         isAdded: false,
// //     },
// //     {
// //         id: 2,
// //         title: "Suggestion 2",
// //         description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
// //         image: "https://example.com/suggestion2.jpg",
// //         isAdded: false,
// //     },
// //     // Add more suggestions here...
// // ];

// // const exploreSuggestionsSlice = createSlice({
// //     name: "exploreSuggestions",
// //     initialState,
// //     reducers: {
// //         addSuggestion: (state, action) => {
// //             const suggestionId = action.payload;
// //             const suggestion = state.find((suggestion) => suggestion.id === suggestionId);
// //             if (suggestion) {
// //                 suggestion.isAdded = true;
// //             }
// //         },
// //         removeSuggestion: (state, action) => {
// //             const suggestionId = action.payload;
// //             const suggestion = state.find((suggestion) => suggestion.id === suggestionId);
// //             if (suggestion) {
// //                 suggestion.isAdded = false;
// //             }
// //         },
// //         clearSuggestions: (state) => {
// //             state.forEach((suggestion) => {
// //                 suggestion.isAdded = false;
// //             });
// //         },
// //     },
// // });

// // export const { addSuggestion, removeSuggestion, clearSuggestions } = exploreSuggestionsSlice.actions;
// // export default exploreSuggestionsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const exploreSuggestionsSlice = createSlice({
//     name: "exploreSuggestions",
//     initialState: {
//         suggestions: [
//             {
//                 id: 1,
//                 title: "Suggestion 1",
//                 description: "This is suggestion 1",
//                 image: "https://example.com/suggestion1.jpg",
//             },
//             {
//                 id: 2,
//                 title: "Suggestion 2",
//                 description: "This is suggestion 2",
//                 image: "https://example.com/suggestion2.jpg",
//             },
//             // Add more dummy suggestions as needed
//         ],
//     },
//     reducers: {
//         addSuggestion: (state, action) => {
//             const suggestionId = action.payload;
//             // Find the suggestion with the matching id
//             const suggestion = state.suggestions.find((suggestion) => suggestion.id === suggestionId);
//             if (suggestion) {
//                 // Add the suggestion to the user's list of added suggestions
//                 // You can customize this logic based on your requirements
//                 // For example, you can maintain a separate array of addedSuggestions
//                 suggestion.added = true;
//             }
//         },
//     },
// });

// export const { addSuggestion } = exploreSuggestionsSlice.actions;

// export default exploreSuggestionsSlice.reducer;