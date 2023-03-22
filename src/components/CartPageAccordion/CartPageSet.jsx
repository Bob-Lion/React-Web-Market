import { CartPageProduct } from './CartPageProduct';
import { CartPageStoringWay } from './CartPageStoringWay';

export function CartPageSet({ data, productType, storingWayImg }) {
  const storingWayData = data.map((data) => {
    return <CartPageProduct key={data.name} data={data} />;
  });

  return (
    <div>
      <CartPageStoringWay
        productType={productType}
        storingWayImg={storingWayImg}
      />
      <ul>{storingWayData}</ul>
    </div>
  );
}
