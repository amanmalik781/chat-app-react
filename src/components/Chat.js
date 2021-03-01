import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import { db } from '../firebase';
import ChatInput from './ChatInput';
import Message from './Message';
function Chat() {
    const chatRef = useRef(null);

    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId && db
            .collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    )
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behaviour: "smooth",
        });

    }, [roomId, loading]);
    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                    <Header>
                        <h3>{roomDetails?.data().name}</h3>
                    </Header>
                    <ChatMessages>
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();
                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}

                                />
                            )
                        })}
                        <ChatBottom ref={chatRef} />
                    </ChatMessages>
                    <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
                </>)}

        </ChatContainer>
    )
}

export default Chat;
const Header = styled.div`
position: fixed;
background-color:gray;
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding:20px;
border:1px solid grey;
`;
const ChatBottom = styled.div`
padding-bottom:100px;
`;
const ChatMessages = styled.div``;
const ChatContainer = styled.div`
flex:0.7;
flex-grow:1;
overflow-y:scroll;
margin-top:60px;

`;
