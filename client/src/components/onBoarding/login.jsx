import React from 'react';


export default function Login() {


return(
    <div>
        <form>
            <input
            type="text"
            name="Username"
            placeholder="Username"
            />
            <input
            type="password"
            name="Password"
            placeholder="Password"
            />
        </form>
        <button>Login</button>
        <p>Forgot Password?</p>
    </div>
    )
};
 