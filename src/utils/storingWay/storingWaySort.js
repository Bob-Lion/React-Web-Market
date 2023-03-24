export function storingWaySort(data, storingWay) {
  const sortArray = data.filter((obj) => obj.storingWay === storingWay);
  return sortArray;
}
