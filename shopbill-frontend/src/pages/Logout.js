import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear session or token
        localStorage.removeItem('token');
        navigate('/login');
    }, [navigate]);

    return (
        <div className="container mt-5">
            <h2>Logging out...</h2>
        </div>
    );
}

export default Logout;
