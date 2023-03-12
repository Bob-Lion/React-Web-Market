import resetButton from '@/assets/ProductListImage/resetButton.svg';
import { AccordionList } from './AccordionList';
import { AccordionSet } from './AccordionSet';

export function Accordion({ data, listName }) {
  return (
    <div>
      {/* 필터 & 초기화 버튼 */}
      <div>
        <span>필터</span>
        <button>
          <img src={resetButton} alt="초기화 버튼 이미지" />
          <span>초기화</span>
        </button>
      </div>
      <div>
        <AccordionSet data={data} listName={listName} />
      </div>
    </div>
  );
}
