import { AddCartSet } from './AddCartSet';
import { ProductSelectCtrl } from './ProductSelectCtrl';

export function AddCartAccordion() {
  return (
    <div>
      <ProductSelectCtrl />
      <AddCartSet />
      <AddCartSet />
      <AddCartSet />
      <ProductSelectCtrl />
    </div>
  );
}
