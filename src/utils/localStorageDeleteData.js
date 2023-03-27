// condition => (object)=> object.id = 'id'

export const localStorageDeleteData = (key, condition) => {
  // 로컬스토리지에서 해당하는 key 값에 저장된 문자열을 가져옴
  const storageValue = localStorage.getItem(key);

  // 가져온 문자열이 존재하지 않는다면 함수 종료
  if (!storageValue) {
    return;
  }

  // 가져온 문자열을 객체 배열로 변환
  const objectArray = JSON.parse(storageValue);

  // 조건에 맞는 객체를 삭제
  const filteredArray = objectArray.filter((object) => {
    return !condition(object);
  });

  // 수정된 객체 배열을 다시 문자열로 변환하여 로컬스토리지에 저장
  localStorage.setItem(key, JSON.stringify(filteredArray));
};
