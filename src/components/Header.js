import React from 'react';
import { useSelector } from 'react-redux';

export default function Header(){
    const {userData, userColor} = useSelector((state)=>({
      userData:state.userData.userName,  
      userColor:state.userData.userColor,  
    }));
    const {userMBTI} = useSelector((state)=>({
        userMBTI:state.mbti,
    }));
    console.log(userData);
    console.log(userColor);
    console.log(userMBTI);
    return(
        <div className="header_wrap">
            <span className="header_wrap_greeting">반가워요😀 {userMBTI} {userData}님 </span>
        </div>
    )
}
