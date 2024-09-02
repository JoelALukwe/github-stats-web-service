import React, { useState } from 'react';
import axios from 'axios';


const UserStats = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const fetchUserStats = async () => {
        try {
            const response = await axios.get(`/api/github/user/${username}`);
            setUserData(response.data);
            setError(null);
        } catch (err) {
            setError('User not found');
            setUserData(null);
        }
    };

    return (
        <div className="container mt-5">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
            </div>
            <button className="btn btn-primary mb-3" onClick={fetchUserStats}>
                Get Stats
            </button>

            {error && <p className="text-danger">{error}</p>}
            {userData && (
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{userData.name}</h3>
                        <p className="card-text">Followers: {userData.followers}</p>
                        <p className="card-text">Public Repos: {userData.public_repos}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserStats;

