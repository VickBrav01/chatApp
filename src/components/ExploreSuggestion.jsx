// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { addSuggestion } from "../Redux/slices/exploreSuggestionSlice";
// // import "./ExploreSuggestions.css";

// // const ExploreSuggestions = () => {
// //     const exploreSuggestions = useSelector((state) => state.exploreSuggestions);
// //     const dispatch = useDispatch();

// //     const handleAddSuggestion = (suggestionId) => {
// //         dispatch(addSuggestion(suggestionId));
// //     };

// //     return (
// //         <div className="explore-suggestions-container">
// //             <h2>Explore Suggestions</h2>
// //             {exploreSuggestions.map((suggestion) => (
// //                 <div className="suggestion-card" key={suggestion.id}>
// //                     <img src={suggestion.image} alt="Suggestion" className="suggestion-image" />
// //                     <div className="suggestion-info">
// //                         <h3>{suggestion.title}</h3>
// //                         <p>{suggestion.description}</p>
// //                         <button className="add-button" onClick={() => handleAddSuggestion(suggestion.id)}>
// //                             Add
// //                         </button>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default ExploreSuggestions;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addSuggestion } from "../Redux/slices/exploreSuggestionSlice";
// import "./ExploreSuggestions.css";

// const ExploreSuggestions = () => {
//     const exploreSuggestions = useSelector(
//         (state) => state.exploreSuggestions.suggestions
//     );
//     const dispatch = useDispatch();

//     const handleAddSuggestion = (suggestionId) => {
//         dispatch(addSuggestion(suggestionId));
//     };

//     return (
//         <div className="explore-suggestions-container">
//             <h2>Explore Suggestions</h2>
//             {exploreSuggestions.map((suggestion) => (
//                 <div className="suggestion-card" key={suggestion.id}>
//                     <img src={suggestion.image} alt="Suggestion" className="suggestion-image" />
//                     <div className="suggestion-info">
//                         <h3>{suggestion.title}</h3>
//                         <p>{suggestion.description}</p>
//                         <button className="add-button" onClick={() => handleAddSuggestion(suggestion.id)}>
//                             Add
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ExploreSuggestions;