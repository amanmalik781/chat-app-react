import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
    function signIn(e) {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <h2>LOGIN TO CHAT APP USING GOOGLE</h2>
                <button onClick={signIn}>SIGN IN WITH GOOGLE</button>
            </LoginInnerContainer>

        </LoginContainer>
    )
}

export default Login;
const LoginContainer = styled.div`
background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;
`;
const LoginInnerContainer = styled.div`
padding:100px;
text-align:center;
background-color:white;
border-radius:10px;
box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
>h2{
    margin-bottom:20px;
}
>button{
    cursor: pointer;
}
`;
