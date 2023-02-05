import React, { useState } from 'react';
import '../../styles/styles.css';
import { InputField } from '../../components';
import { log } from 'console';

function Login() {

    const [loginCredentials, setLoginCredentials] = useState<{ username: string; password: string }>({
        username: '',
        password: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name] : e.target.value
        })

    }
    return (
        <div className="App">
            Login page
            <InputField
                {...{
                    values: loginCredentials.username,
                    keyText: 'username',
                    label:'NAME',
                    placeholder: 'Enter username',
                    inputProps: { maxLength: 20 },
                    handleChange
                }}
            />
            <InputField
                {...{
                    values: loginCredentials.username,
                    keyText: 'password',
                    label:'PASSWORD',
                    placeholder: 'Enter username',
                    inputProps: { maxLength: 20 },
                    handleChange
                }}
            />
        </div>
    );
}

export default Login;
