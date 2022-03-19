import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { useInView } from "react-intersection-observer";

import {mbtiInfo} from '../../assets/css/mbtiInfo.css';

export default function MbtiInfo(){
    let location = useLocation();
    const [ref, inView] = useInView()

    // https://slog.website/post/8
    // 나중에 DB사용하고, 무한스크롤 사용할 때 꼭 쓰기!
    const {userData, userColor} = useSelector((state)=>({
        userData:state.userData.userName,  
        userColor:state.userData.userColor,  
    }));
    const {userMBTI} = useSelector((state)=>({
        userMBTI:state.mbti
    }));
    console.log(userData,userColor,userMBTI);
    const [mbti, setMbti] = useState(userMBTI);

    const test = {
        ISFJ:'qnqn',
        INFJ:"asdfasdf"
    }


    return(
        <div className="info_container"  ref={ref}>
            <div className="info_main_image">
                <img src={"image/"+userMBTI+"_main.svg"}></img>
                <div className="info_main_image_comment">
                    <span>{userMBTI}</span>
                    <span>{test.ISFJ}</span>
                </div>
            </div>
            {/* Element {inView.toString()} */}


            {[1,2,3,4,5].map(()=>{
                return(
                    <div className="info_card">
                        {/* <div className="info_user_color" style={{backgroundColor:userColor}}></div> */}
                        <div className="info_title">
                            <span>isfj의 기본 특성알려드릴게요</span>
                        </div>
                        <div className="info_picture">
                        <img src={"image/isfj_main.png"}></img>
                        </div>
                        <div className="info_content">
                            es/mbtiGetInfo/MbtiInfo.js
                            Line 3:10:   'useDispatch' is defined but never used                                                                    no-unused-vars
                            Line 7:9:    'mbtiInfo' is defined but never used                                                                       no-unused-vars
                            Line 10:9:   'location' is assigned a value but never used                                                              no-unused-vars
                            Line 11:17:  'inView' is assigned a value but never used                                                                no-unused-vars
                            Line 23:12:  'mbti' is assigned a value but never used                                                                  no-unused-vars
                            Line 23:18:  'setMbti' is assigned a value but never used                                                               no-unused-vars
                            Line 34:17:  img elements must have an alt prop, either with meaningful
                        </div>
                    </div>
                );
            })}
        </div>
    )
}