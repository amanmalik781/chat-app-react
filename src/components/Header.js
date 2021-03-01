import React from 'react'
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    src={user?.photoURL}
                    alt={user?.displayName}
                />

            </HeaderLeft>
            {/* <HeaderSearch>
                <SearchIcon />
                <input placeholder='SEARCH' />

            </HeaderSearch> */}
            <HeaderRight>
                <button onClick={e => auth.signOut()}>LOGOUT</button>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const HeaderContainer = styled.div`
display:flex;
position:fixed;
width:100%;
padding:10px;
align-items:center;
justify-content:space-between;
background-color:var(--slack-color);
color:white;
`;
const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;
>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
};

`;

const HeaderAvatar = styled(Avatar)`
cursor:pointer;
:hover{
    opacity:0.8
}`;
const HeaderSearch = styled.div`
flex:0.4;
opacity:1;
border-radius:6px;
background-color:#49264A;
text-align:center;
display:flex;
padding: 0 50px;
border:1px gray solid;
>input{
    background-color:#49264A;
    border:none;
    text-align:center;
    min-width:30vw;
    outline:0;
    color:white;
};
`;
const HeaderRight = styled.div`
flex:0.3;
display:flex;
align-items:flex-end;
>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
};
>button{
    padding:6px;
    margin-left:8px;
    border-radius:5px;
    cursor: pointer;
    background-color:rgb(255, 65, 68);
    color:white;
}
`;