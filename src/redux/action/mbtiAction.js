const types = {
    //user
    SET_USER: 'SET_USER',
    SET_MBTI: 'SET_MBTI',
};

export const setMBTI = (data) => {
    console.log('setMBTI');
    console.log(data);
    return{
      type: types.SET_MBTI,
      payload: data,
    }
  }