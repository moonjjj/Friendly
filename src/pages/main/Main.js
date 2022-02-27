import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/main.css';


export default function Main(){
    return(
        <div>
        프로젝트 시작해봅시다~
            <Link to="/MbtiInfo">mbti!!</Link>
        
        </div>
    )
}
