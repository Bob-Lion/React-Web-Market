export function allDataFilterSelect(allData, filterData, filterType) {
  const filteredData = allData.filter((item) =>
    filterData.includes(item[filterType])
  );
  return filteredData;
}
