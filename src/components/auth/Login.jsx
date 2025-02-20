import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Email/Username" required />
                <input type="password" placeholder="Password" required />
                <label>
                    <input type="checkbox" /> Remember me
                </label>
                <a href="/forgot-password">Forgot password?</a>
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/register">Sign up</a></p>
            </form>
        </div>
    );
};

export default Login; 