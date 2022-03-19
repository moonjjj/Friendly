import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../redux/action/action';

export default function Header(){
    const dispatch = useDispatch();
    const history = useHistory();

    const {userData, userColor} = useSelector((state)=>({
      userData:state.userData.userName,  
      userColor:state.userData.userColor,  
    }));
    const {userMBTI} = useSelector((state)=>({
        userMBTI:state.mbti,
    }));

    // console.log(userData);
    // console.log(userColor);
    // console.log(userMBTI);
    // console.log(history.location.pathname);
    // // dispatch(actions.setToken(false));
    // // dispatch(actions.setUser(userDefault));

    const logoutFnc = () => {
        dispatch(actions.setUser(false));
        dispatch(actions.setMBTI(false));
        history.push('/');
        
        // dispatch(actions.setUser(false));
    }

    return(
        <div className="header_wrap">

            <span className="header_wrap_greeting">
            반가워요
            &nbsp;{userMBTI}&nbsp;{userData}
            
            {userMBTI === false?
            <> MBTI저장소입니다.😀</>
            :<>님 😀</> 
            }
            
            </span>

            {
            // history.location.pathname != '/'?
            userMBTI != false?
            <a href="" onClick={logoutFnc}>
                로그아웃
            </a>
            :null
            }
        </div>
    )
}
