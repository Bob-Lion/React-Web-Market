export function NaveDetailModal({ data, listName }) {
  return (
    <div>
      <div>
        <strong>{listName}</strong>
        {listName === '브랜드' ? (
          <ul>
            <li>
              <button type="button">가나다순</button>
            </li>
            <li>
              <button type="button">상품 많은순</button>
            </li>
          </ul>
        ) : null}
        <button type="button">
          <img src="" alt="" />
        </button>
      </div>
      <ul>
        <li></li>
      </ul>
      <div>
        <button type="button">
          <img src="" alt="" />
          <span>초기화</span>
        </button>
        <button type="button">
          <span>확인</span>
        </button>
      </div>
    </div>
  );
}
