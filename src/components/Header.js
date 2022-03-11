import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/action/action';

export default function Header(){
    const dispatch = useDispatch();

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

    // dispatch(actions.setToken(false));
    // dispatch(actions.setUser(userDefault));

    const logoutFnc = () => {
        dispatch(actions.setUser(false));
    }

    return(
        <div className="header_wrap">
            <span className="header_wrap_greeting">
            반가워요😀 
            {userMBTI} {userData}
            님 
            </span>

            <a href="" onClick={logoutFnc}>
                X
            </a>
        </div>
    )
}
