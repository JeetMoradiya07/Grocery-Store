import React, { useState } from 'react';
import styles from "./Profile.module.scss";
import { IoCameraSharp } from "react-icons/io5";


export default function Profile({ onClose }) {

  // Initial profile state
  const [profile, setProfile] = useState({
    name: 'Kano',
    email: 'kanopatel@gmail.com',
    number:'123456789',
    avatarUrl: 'https://picsum.photos/200',
  });

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile({
      ...editProfile,
      [name]: value,
    });
  };

  // Function to handle avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditProfile({
          ...editProfile,
          avatarUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to save changes
  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.Profile}>
        <div className={styles.profile_view}>
          {isEditing ? (
            <div className={styles.edit_mode}>
              <div className={styles.imgCont}>
                <div className={styles.avatar_input_container}>
                  <img
                    src={editProfile.avatarUrl}
                    alt="Profile Avatar"
                    className={styles.avatar}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className={styles.avatar_input}
                    id="avatarInput"
                  />
                  <label htmlFor="avatarInput" className={styles.icon_label}>
                    <IoCameraSharp className={styles.camera_icon} />
                  </label>
                </div>

              </div>
              <label>
              Name :
                <input
                  type="text"
                  name="name"
                  value={editProfile.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>
              <label>
                Email :
                <input
                  type="email"
                  name="email"
                  value={editProfile.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>
              <button onClick={handleSave} className={styles.save_button}>
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className={styles.cancel_button}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <img
                src={profile.avatarUrl}
                alt="Profile Avatar"
                className={styles.avatar}
              />
              <div className={styles.profile_detail}>
                <span className={styles.name}>{profile.name}</span>
                <span className={styles.number}>{profile.number}</span>
                <span className={styles.email}>{profile.email}</span>
              </div>
              <button onClick={() => setIsEditing(true)} className={styles.edit_button}>
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
