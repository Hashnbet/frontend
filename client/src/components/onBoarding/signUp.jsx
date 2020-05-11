import React, { useState } from 'react';

export default function SignUp() {
    const [signUp, setSignUp ] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setSignUp({ 
            ...signUp,
            [e.target.name]: e.target.value,
         });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={signUp.username}
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={signUp.password}
                    placeholder='Password'
                    onChange={handleChange}
                />
                    <button>Login</button>
                    <button>SignUp</button>
            </form>
        </div>
    );
};


