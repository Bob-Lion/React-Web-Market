export function NaveDetailModal({ data, listName }) {
  return (
    <div>
      <div>
        <strong>{listName}</strong>
        {listName === '브랜드' ? (
          <ul>
            <li></li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
