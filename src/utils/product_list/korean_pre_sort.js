// 영어보다 한글이 먼저오게 정렬해주는 함수

export function koream_pre_sort(data) {
  const sortedKeys = Object.keys(data).sort((a, b) =>
    a.localeCompare(b, 'ko-KR', { ignorePunctuation: true })
  );

  const sortedObj = {};

  sortedKeys.forEach((key) => {
    sortedObj[key] = data[key];
  });

  // console.log(sortedObj);
  return sortedObj;
}
