import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Login.css';

const Login = ({onRouteChange}) => {
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const onUsernameChange = (event) => {
        setSignInUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }

    const onSubmit = () => {
        
    }

    return(
        <div className = "login-container">
            <h1 className="logo">Canvas Chat</h1>
            <div className="login">
                <TextField
                variant="standard"
                placeholder="Username"
                margin="normal"
                onChange={onUsernameChange}
                />
                
                <TextField
                variant="standard"
                placeholder="Password"
                margin="normal"
                type="password"
                onChange={onPasswordChange}
                />

                <div className="button">
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={ () => 
                        onRouteChange('chat')
                        //console.log(signInUsername, signInPassword)
                    }>
                        Login
                    </Button>
                </div>

                <p>Don't have an account? <span className="link" onClick={() => {onRouteChange('register')}}>Register</span>.</p>
            </div>
        </div>
    );
}

export default Login;