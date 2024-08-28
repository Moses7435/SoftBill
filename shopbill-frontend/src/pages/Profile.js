import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/profile');
                setProfile(response.data);
            } catch (error) {
                console.error('There was an error fetching the profile data!', error);
            }
        };
        fetchProfile();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Profile</h2>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Joined:</strong> {profile.joinedDate}</p>
        </div>
    );
}

export default Profile;
