import { CartPageProduct } from './CartPageProduct';
import { CartPageStoringWay } from './CartPageStoringWay';

export function CartPageSet({ data, productType, storingWayImg }) {
  const storingWayData = data.map((data) => {
    return <CartPageProduct data={data} key={data.name} />;
  });
  console.log(storingWayData);

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
