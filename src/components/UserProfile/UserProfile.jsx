import React from "react";
import { Avatar, Button } from "antd";
import { FaRegUser, FaDharmachakra, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import profilePic from "../../images/img.jpg";
import "./UserProfile.css";

const UserProfile = () => {
  const username = "vickbrav.ke";
  const postCount = 245;
  const followersCount = 5000000;
  const followingCount = 2000;
  const fullName = "Vick Brav";
  const bio = "Change is inevitable 💯";
  const instagramLink = "https://www.instagram.com/vickbrav/";
  const twitterLink = "https://twitter.com/vickbrav";
  const linkedinLink = "https://www.linkedin.com/in/vickbrav/";

  return (
    <div className="user-profile">
      <div className="profile-header">
        <Avatar
          src={profilePic}
          icon={<FaRegUser />}
          alt="Profile Picture"
          size={150}
        />
        <div className="profile-actions">
          <p className="username">{username}</p>
          <Button className="edit-profile-btn">Edit Profile</Button>
          <FaDharmachakra className="settings-icon" />
        </div>
      </div>
      <div className="profile-stats">
        <p className="stat">{postCount} posts</p>
        <p className="stat">{followersCount} Followers</p>
        <p className="stat">{followingCount} Following</p>
      </div>
      <div className="profile-details">
        <p className="full-name">{fullName}</p>
        <p className="bio">{bio}</p>
        <div className="social-links">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
