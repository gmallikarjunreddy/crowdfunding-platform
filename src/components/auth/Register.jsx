import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <label>
                    <input type="checkbox" /> I accept the terms and conditions
                </label>
                <select>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="backer">Backer</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register; 