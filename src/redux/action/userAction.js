const types = {
    //user
    SET_USER: 'SET_USER',
    SET_MBTI: 'SET_MBTI',
};

export const setUser = (data) => {
    console.log('setUser');
    console.log(data);
    return {
      type: types.SET_USER,
      payload: data,
    };
  };