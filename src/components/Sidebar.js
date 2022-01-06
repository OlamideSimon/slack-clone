import AddIcon from '@mui/icons-material/Add';
import AppsIcon from '@mui/icons-material/Apps';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CreateIcon from '@mui/icons-material/Create';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InboxIcon from '@mui/icons-material/Inbox';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
    const [ channels ] = useCollection(collection(db, 'rooms'));
    const [user] = useAuthState(auth)

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>PAPA FAM HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Mentions & Reactions' />
            <SidebarOption Icon={DraftsIcon} title='Saved Items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
            <SidebarOption Icon={PeopleAltIcon} title='People & User Groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File Browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SidebarOption Icon={AddIcon} title='Add Channel' addChannelOption />

            {channels?.docs.map((doc) => (
                <SidebarOption 
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
 background-color: var(--slack-color);
 color: white;
 flex: 0.3;
 border-top: 1px solid #49274b;
 max-width: 260px;
 margin-top: 60px;
 overflow-y: scroll;

 > hr {
     margin-top: 10px;
     margin-bottom: 10px;
     border: 1px solid #49274b
 }
`

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`