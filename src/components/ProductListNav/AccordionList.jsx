import click_check_on from '@/../public/ProductListImage/Check_on.svg';
import click_check_off from '@/../public/ProductListImage/Check_off.svg';

//아코디언 목록의 리스트
export function AccordionList({ name, count }) {
  return (
    <li>
      <a className={`.willRouter`} href="/">
        <button>
          <img src={click_check_off} alt="해당 리스트 체크하는 버튼"></img>
        </button>
        <span>{name}</span>
        <span>{count}</span>
      </a>
    </li>
  );
}
