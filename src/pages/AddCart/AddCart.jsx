import { AddCartAccordion } from '@/components/AddCartAccordion/AddCartAccordion';
import { AddCartCredit } from '@/components/AddCartCredit/AddCartCredit';

export function AddCart() {
  const addCartData = JSON.parse(localStorage.getItem('addCart'));
  return (
    <div>
      <h2>장바구니</h2>
      <div>
        <AddCartAccordion data={addCartData} />
        <AddCartCredit />
      </div>
    </div>
  );
}
