import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar 
                    alt={user?.displayName}
                    src={user?.photoURL}
                    onClick={() => signOut(auth)}
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search PAPAFAM' />
            </HeaderSearch>

            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421544;
    text-align: center;
    display: flex;
    padding: 10px 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`