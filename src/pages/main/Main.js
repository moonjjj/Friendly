import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/css/main.css';
import MbtiInfo from '../mbtiGetInfo/MbtiInfo';

import { actions } from '../../redux/action/action';


export default function Main(){

    const {userColor} = useSelector((state)=>({
        userColor:state.userData.userColor,  
      }));
    console.log(userColor);

    let history = useHistory();
    let dispatch = useDispatch();
    var mbti = '';
    const [userMBTI, setUserMBTI] = useState({ //mbti 4가지 받음
        mbti1:'', // i or e
        mbti2:'', // s or n
        mbti3:'', // f or t
        mbti4:''  // j or p
    });
    const [userData, setUserData] = useState({
        userName:'', // 유저 이름
        userColor:'#abecd96c' // 초기값 미리 지정 (현재색상)
    });
    const nextValidationFnc = () =>{
        if(userMBTI.mbti1 === '' || userMBTI.mbti2 === ''|| userMBTI.mbti3 === ''|| userMBTI.mbti4 === ''){
            alert("mbti를 선택해주세요.")
        } else if(userData.userName === ''){
            alert("이름이나 닉네임을 입력해주세요.");
        } else{  //조건 충족시
            for(let i =0; i<4; i++){ //object value값을 mbti라는 변수에 담음
                mbti = mbti + Object.values(userMBTI)[i];
            }
            dispatch(actions.setUser(userData));
            dispatch(actions.setMBTI(mbti));
            
            history.push({ //지금은 데이터를 state에 담아 보냈지만, redux로 교체예정
                pathname: '/MbtiInfo'
            });
        }
    }
    return(
        <>
        {!userColor ? 
        <div className="main_wrap">
            <div className="main_select_container">
                <span>MBTI (아래 박스를 클릭하여 선택해주세요)</span>
                <div className="main_select_box">
                    <select className="mbti_select" 
                    onChange={(e)=>{
                        setUserMBTI({...userMBTI, mbti1:e.target.value})
                    }}
                    >
                        <option value=""></option>
                        <option value="i">I</option>
                        <option value="e">E</option>
                    </select>
                    <select className="mbti_select"
                    onChange={(e)=>{
                        setUserMBTI({...userMBTI, mbti2:e.target.value})
                    }}
                    >
                        <option value=""></option>
                        <option value="s">S</option>
                        <option value="n">N</option>
                    </select>
                    <select className="mbti_select"
                    onChange={(e)=>{
                        setUserMBTI({...userMBTI, mbti3:e.target.value})
                    }}
                    >
                        <option value=""></option>
                        <option value="t">F</option>
                        <option value="f">T</option>
                    </select>
                    <select className="mbti_select"
                    onChange={(e)=>{
                        setUserMBTI({...userMBTI, mbti4:e.target.value})
                    }}
                    >
                        <option value=""></option>
                        <option value="j">J</option>
                        <option value="p">P</option>
                    </select>
                </div>
            </div>
            <span className="mbti_info">
                MBTI를 모르신다면?
                <a href="https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC" target="_blank" className="mbti_link"> 검사하러가기!</a>
            </span>
            <div className="main_select_container">
                <span>이름이나 닉네임</span>
                <div className="main_select_box">
                    <input 
                    type="text" 
                    placeholder='이름이나 닉네임을 적어주세요' 
                    onChange={(e)=>{
                        setUserData({...userData, userName:e.target.value})
                    }}
                    />
                </div>
            </div>
            <div className="main_select_container">
                <span>좋아하는 색깔</span>
                <div className="main_select_box">
                    <select onChange={(e)=>{
                        setUserData({...userData, userColor:e.target.value})
                    }}>
                        <option value="#abecd96c">연초록색</option>
                        <option value="#ffffff">흰색</option>
                        <option value="#fffff">연노랑색</option>
                        <option value="#fffff">연보라색</option>
                        <option value="#fffff">하늘색</option>
                        <option value="#fffff">연분홍색</option>
                    </select>
                </div>
            </div>
            <div className="go_mbti_btn" onClick={nextValidationFnc}>GO</div>
        </div>
        :<MbtiInfo/>}
        </>
    )
}
