import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

export default function MbtiInfo(){
    let location = useLocation();

    // let mbti = location.state.mbti;
    // let userData = location.state.userData;
    const {userData, userColor} = useSelector((state)=>({
        userData:state.userData.userName,  
        userColor:state.userData.userColor,  
    }));
    const {userMBTI} = useSelector((state)=>({
        userMBTI:state.mbti,
    }));
    console.log(userData,userColor,userMBTI);
    return(
        <div style={{background:userColor}}>
            엠비티아이 들어갈 곳 입니다.
        </div>
    )
}