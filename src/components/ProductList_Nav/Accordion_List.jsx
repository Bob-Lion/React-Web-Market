export function Accordion_List({ list_name, count }) {
  return (
    <li>
      <a className={`.willRouter`} href="/">
        <button>
          <img
            alt="해당 리스트 체크하는 버튼"
            src="../../assets/ProductListImage/Check_off.svg"
          ></img>
        </button>
        <span>{list_name}</span>
        <span>{count}</span>
      </a>
    </li>
  );
}
