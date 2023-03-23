import { useEffect } from 'react';
import addCartIconUrl from '../../../public/icons/web-icons/Cart.svg';

export default function AddCartShortcutBtn() {
  const handleAddCart = useEffect(() => {}, []);

  return (
    <button className="AddCartShortcutBtn" type="button">
      <img alt="장바구니 아이콘" src={addCartIconUrl} />
    </button>
  );
}
