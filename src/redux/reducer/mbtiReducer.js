const types = {
    //user
    SET_USER: 'SET_USER',
    SET_MBTI: 'SET_MBTI',
};
const userDefault = false;

export default (state = userDefault, action) => {
    switch (action.type) {
      case types.SET_MBTI:
        return action.payload;
  
      default:
        return state;
    }
  };