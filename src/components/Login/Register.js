import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Login.css';

const Register = ({onRouteChange}) => {
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
        if (!(password.length > 0)){
            console.log('Please enter a password');
        }
        if (password !== pwConfirm){
            console.log ('Passwords don\'t match');
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
                onChange={onPasswordChange}
                />

                <TextField
                variant="standard"
                placeholder="Confirm Password"
                margin="normal"
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