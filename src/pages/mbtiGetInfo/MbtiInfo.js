import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MbtiInfo(){
    let location = useLocation();

    let mbti = location.state.mbti;
    let userData = location.state.userData;
    return(
        <div>
            엠비티아이 들어갈 곳 입니다.
        </div>
    )
}