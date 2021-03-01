import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { enterRoom } from '../features/appSlice';
import { useDispatch } from 'react-redux';


function SidebarOption({ Icon, addChannelOption, title, id }) {
    const dispatch = useDispatch();
    function addChannel(e) {
        const channelName = prompt('Please Enter the Channel Name');
        if (channelName) {
            db.collection('rooms').add({
                name: channelName,

            })
        }

    }
    function selectChannel() {
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            }));
        }
    }
    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                    <SidebarOptionChannel>
                        <span>#</span>{title}
                    </SidebarOptionChannel>
                )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption;
const SidebarOptionContainer = styled.div`
display:flex;
align-items:center;
font-size:12px;
padding-right:2px;
padding-left:2px;
cursor: pointer;
:hover{
    opacity:0.9;
    background-color:#49274A;
}
>h3>span{
    padding:15px;
}
`;
const SidebarOptionChannel = styled.h3`
padding:10px 0;
font-weight:300;
`;