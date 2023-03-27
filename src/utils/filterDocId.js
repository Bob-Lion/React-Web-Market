export function filterByDocId(data, docId) {
  return data.filter((item) => item.key === docId);
}
