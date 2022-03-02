const types = {
    //user
    SET_USER: 'SET_USER',
    SET_MBTI: 'SET_MBTI',
};
const userDefault = {
    userData : false,
    mbti : false,
}

export default (state = userDefault, action) => {
    switch (action.type) {
      case types.SET_USER:
        return action.payload;
  
      default:
        return state;
    }
  };