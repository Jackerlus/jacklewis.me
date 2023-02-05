import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Login.css";
import PropTypes from "prop-types";

function Login({ token, setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const newToken = await loginUser({ email, password });
        setToken(newToken);
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate, token]);

    return (
        <div>
            <h1>Log In to FileShare</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <input placeholder="Email" id="email" type="email" onChange={e => setEmail(e.target.value)} />
                    <br />
                    <input placeholder="Password" id="password" type="password" onChange={e => setPassword(e.target.value)} />
                    <br />
                    <div className="login-buttons">
                        <input type="submit" value="Log In" id="login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

async function loginUser(cred) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }).then(data => data.json())
}



export default Login;