import resetButton from '@/assets/ProductListImage/resetButton.svg';

export function AccordionFillter() {
  return (
    <div>
      <span>필터</span>
      <button>
        <img src={resetButton} alt="초기화 버튼 이미지" />
        <span>초기화</span>
      </button>
    </div>
  );
}
