import React, { useState } from 'react';
import styles from "./Profile.module.scss";

export default function Profile({ onClose }) {

    const [profile, setProfile] = useState({
        name: 'kano',
        email: 'kanopatel@gmail.com',
        avatarUrl: 'https://picsum.photos/200',
    });

    return (
        <>
            <div className={styles.overlay} onClick={onClose} /> {/* Overlay that closes the cart */}
            <div className={styles.Profile}>
                <div className={styles.profile_view}>
                    <img src={profile.avatarUrl} alt="Profile Avatar" className={styles.avatar} />
                    <div className={styles.profile_detail}>
                        <span className={styles.name}>{profile.name}</span>
                        <span className={styles.email}>{profile.email}</span>
                    </div>
                    <button className={styles.edit_button}>Edit Profile</button>
                </div>
            </div>;
        </>
    );
}
