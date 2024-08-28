import React, { useState } from 'react';
import axios from 'axios';

function Settings() {
    const [settings, setSettings] = useState({
        theme: 'light',
        notifications: true
    });

    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/settings', settings);
            alert('Settings updated successfully');
        } catch (error) {
            console.error('There was an error updating the settings!', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Theme</label>
                    <select className="form-select" name="theme" value={settings.theme} onChange={handleChange}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Notifications</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="notifications" checked={settings.notifications} onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })} />
                        <label className="form-check-label">
                            Enable Notifications
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save Settings</button>
            </form>
        </div>
    );
}

export default Settings;
