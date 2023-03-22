export function CartPageStoringWay({ productType, storingWayImg }) {
  return (
    <div>
      <img alt="상품 저장 방법별 이미지" src={storingWayImg} />
      <span>{productType} 상품</span>
    </div>
  );
}
