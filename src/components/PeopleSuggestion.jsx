import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser } from "../Redux/slices/suggestionSlice";
import "./PeopleSuggestions.css";

const PeopleSuggestions = () => {
    const suggestedPeople = useSelector((state) => state.suggestions);
    const dispatch = useDispatch();

    const handleFollow = (userId) => {
        dispatch(followUser({ userId }));
    };

    return (
        <div className="people-suggestions-container">
            <h2>Suggested People</h2>
            {suggestedPeople.map((person) => (
                <div className="person-card" key={person.id}>
                    <img src={person.avatar} alt="Profile" className="person-avatar" />
                    <div className="person-info">
                        <h3>{person.name}</h3>
                        <p>{person.bio}</p>
                        <button
                            className={`follow-button ${person.isFollowing ? "following" : ""}`}
                            onClick={() => handleFollow(person.id)}
                        >
                            {person.isFollowing ? "Following" : "Follow"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PeopleSuggestions;
