import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { useDispatch } from 'react-redux'
import { enterRoom } from '../features/appSlice';

function SidebarOption({ id, Icon, title, addChannelOption }) {
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Please enter the channel's name");

        if (channelName) {
            addDoc(collection(db, 'rooms'), {
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            }))
        }
    }

    return (
        <SidebarOptionContainer
        onClick={addChannelOption? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    margin-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }
`

const SidebarOptionChannel = styled.h3`
    > span {
        padding: 15px;
    }

    padding: 10px 0;
    font-weight: 300;
`