//api에서 정의한 두 모듈을 가져옵니다.
import { findUserByUsername, findAddressByUserId } from "./api";

//유저 주소 검색을 위한 함수 객체입니다.
const UserInput = () => {
  //주소 값이 들어갈 변수인 value와 error가 날 경우 값을 넣을 error 변수입니다.
  let value = "";
  let error = "";

  //주소를 반환합니다.
  function getValue() {
    return value;
  }

  //error을 반환합니다.
  function getError() {
    return error;
  }

  //주소 값을 설정합니다.
  function setValue(inputValue) {
    value = inputValue;
  }
  
  // 지시사항을 참고하여 searchAddress() 함수를 구현하세요.
  //error message는 빈 문자열로 설정해주세요.
  //return에 작성된 값을 지우고 구현하면 됩니다.
  function searchAddress() {
    error = "";
    
    return findUserByUsername(value)
        .then(user => findAddressByUserId(user.id))
        .catch(e => {
            error = e.message
        })
        // .then(address => {
        //     return address
        // })
    
    return Promise.resolve();
  }

  return { getError, getValue, setValue, searchAddress };
};

export default UserInput;
