import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Login.css';

const Register = ({onRouteChange, loadUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');


    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const onPasswordConfirmChange = (event ) => {
        setPwConfirm(event.target.value);
    }

    const handleRegister = () => {
        if (!(username.length > 0)){
            console.log('Please enter a username');
        }
        else if (!(password.length > 0)){
            console.log('Please enter a password');
        }
        else if (password !== pwConfirm){
            console.log ('Passwords don\'t match');
        } else {
            fetch('http://localhost:4000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then (response => response.json())
            .then (user => {
                if (user.length){
                    loadUser(user);
                    onRouteChange('chat');
                } else {
                    console.log('Could not register.');
                }
            })
        }
    }

    return(
        <div className = "register-container">
            <h1 className="logo">Register</h1>
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

                <TextField
                variant="standard"
                placeholder="Confirm Password"
                margin="normal"
                type="password"
                onChange={onPasswordConfirmChange}
                />

                <div className="button">
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={handleRegister}
                    >
                        Register
                    </Button>
                </div>

                <p>Have an account? <span className="link" onClick={() => {onRouteChange('login')}}>Log in</span>.</p>
            </div>
        </div>
    );
}

export default Register;