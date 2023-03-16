import { BrandSortBtn } from './BrandSortBtn';
import modalClose from '@/../public/ProductListImage/ModalClose.svg';
import resetButton from '@/../public/ProductListImage/resetButton.svg';

export function NavDetailModal({
  data,
  listName,
  setSortData,
  renderData,
  // modalVisible,
  setModalVisible,
}) {
  const handleModalClose = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <div>
        <strong>{listName}</strong>
        {listName === '브랜드' ? (
          <ul>
            <BrandSortBtn data={data} setSortData={setSortData} />
          </ul>
        ) : null}
        <button type="button" onClick={handleModalClose}>
          <img alt="모달창 닫기 버튼" src={modalClose} />
        </button>
      </div>
      <ul>{renderData}</ul>
      <div>
        <button type="button">
          <img alt="리셋버튼 이미지 로고" src={resetButton} />
          <span>초기화</span>
        </button>
        <button type="button">
          <span>확인</span>
        </button>
      </div>
    </div>
  );
}
