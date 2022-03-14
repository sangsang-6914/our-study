import {isLogin} from '@api/user';
import {handleException} from '@utils/errorUtils';
import {useState} from 'react';

const useLoginCheck = async () => {
  let auth = false;
  try {
    const response = await isLogin();
    console.log(response);
    if (response?.accessToken) {
      auth = true;
    }
  } catch (err) {
    handleException(err);
  } finally {
    return auth;
  }
};

export default useLoginCheck;
