import arrow from '@/assets/ProductListImage/Arrow.svg';
import { AccordionList } from './AccordionList';
import leftarrow from '@/assets/ProductListImage/Arrow.svg';

export function AccordionSet({ data, listName }) {
  return (
    <div>
      <button>
        <span>{listName}</span>
        <span>
          <img src={arrow} alt="해당 아코디언 목록 펼치고 닫는 화살표" />
        </span>
      </button>
      <ul>
        {data.map((list, index) => {
          return <AccordionList key={index} name={list[0]} count={list[1]} />;
        })}
      </ul>
      <button>
        <span>{listName} 더보기</span>
        <img src={leftarrow} alt="해당 리스트 더보기 화살표 버튼" />
      </button>
    </div>
  );
}
