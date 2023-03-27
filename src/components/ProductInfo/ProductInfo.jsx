import classes from '@/components/ProductInfo/ProductInfo.module.scss';
import { currentProductState } from '@/@atom/currentProductState';
import { useRecoilState } from 'recoil';

export function ProductInfo() {
  const [CurrentProduct, setCurrentProduct] =
    useRecoilState(currentProductState);

  return (
    <div className={classes.productDetailWrap}>
      <section className={classes.product}>
        <h2 className={classes.a11yHidden}>
          {CurrentProduct.name} 상품 상세페이지
        </h2>

        <img
          alt={`${CurrentProduct.name} ${'이미지'}`}
          className={classes.productMainImg}
          src={CurrentProduct.mainImg}
        />

        <div className={classes.productDetailInfo}>
          <p className={classes.shippingWay}>
            {CurrentProduct.detailInfo.shippingWay}
          </p>

          <h3 className={classes.name}>
            [{CurrentProduct.brand}] {CurrentProduct.name}
          </h3>

          <p className={classes.description}>{CurrentProduct.description}</p>

          <div>
            <p className={classes.saleRatio}>
              {CurrentProduct.saleRatio !== 0 ? (
                <span>{CurrentProduct.saleRatio}% &nbsp;</span>
              ) : null}
            </p>

            <h4 className={classes.salePrice}>
              {CurrentProduct.salePrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              <span>원</span>
            </h4>
          </div>

          <p className={classes.price}>
            {CurrentProduct.saleRatio !== 0 ? (
              <span>
                {CurrentProduct.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </span>
            ) : null}
          </p>

          <p className={classes.alert}>로그인 후, 적립 혜택이 제공됩니다.</p>

          <ul>
            <li>
              <p>배송</p>
              <p>
                {CurrentProduct.detailInfo.shippingWay}
                <span className={classes.lighter}>
                  {CurrentProduct.detailInfo.shippingWay === '샛별배송' ? (
                    <span>
                      23시 전 주문 시 내일 아침 7시 전 도착
                      <br />
                      (대구·부산·울산 샛별배송 운영시간 별도 확인)
                    </span>
                  ) : null}
                </span>
              </p>
            </li>

            <li>
              <p>판매자</p>
              <p>{CurrentProduct.detailInfo.producer}</p>
            </li>

            <li>
              <p>포장타입</p>
              <p>
                {CurrentProduct.detailInfo.wrappingType}
                <span className={classes.lighter}>
                  택배 배송은 에코 포장이 스티로폼으로 대체됩니다.
                </span>
              </p>
            </li>

            <li>
              <p>판매단위</p>
              <p>{CurrentProduct.detailInfo.salesUnit}</p>
            </li>

            <>
              {CurrentProduct.detailInfo.productWeight !== null ? (
                <li>
                  <p>중량/용량</p>
                  <p>{CurrentProduct.detailInfo.productWeight}</p>
                </li>
              ) : null}
            </>

            <li>
              <p>원산지</p>
              <p>{CurrentProduct.detailInfo.productOrigin}</p>
            </li>

            <>
              {CurrentProduct.detailInfo.alergicInfo !== null ? (
                <li>
                  <p>알레르기 정보</p>
                  <p className={classes.lighter}>
                    {CurrentProduct.detailInfo.alergicInfo &&
                      CurrentProduct.detailInfo.alergicInfo}
                  </p>
                </li>
              ) : null}
            </>

            <li>
              <p>상품선택</p>
              <div className={classes.productSelect}>
                {/* <p className={classes.productSelectItem}>
                  [{CurrentProduct.brand}] {CurrentProduct.name}
                </p>
                <p className={classes.productSelectQuantity}>
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </p>
                <p className={classes.producSelectPrice}>
                  {CurrentProduct.salePrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </p> */}
              </div>
            </li>
          </ul>
          <p className={classes.productTotalPrice}>
            총 상품금액: <span>4,980</span>원
          </p>
          <div className={classes.btnArea}>
            <img
              alt="관심 상품으로 등록되어 있습니다."
              src="img/ProductDetail/heart-on.svg"
            />
            <img
              alt="해당 상품의 재입고 알림을 받지 않는 상태입니다."
              src="img/ProductDetail/alarm-off.svg"
            />
            <p>장바구니 담기</p>
          </div>
        </div>
      </section>
      <ul className={classes.productInfoTablist}>
        <li className={`${classes.tab} ${classes.isSelected}`} type="button">
          상품설명
        </li>

        <li className={classes.tab} type="button">
          상세정보
        </li>

        <li className={classes.tab} type="button">
          후기<span>({CurrentProduct.reviewCount})</span>
        </li>

        <li className={classes.tab} type="button">
          문의
        </li>
      </ul>
      <section className={classes.scrollableInfo}>
        <h2 className={classes.a11yHidden}>{CurrentProduct.name} 상품 설명</h2>

        <div>
          <img alt="디테일 이미지 1" src={CurrentProduct.detailImg[0]} />
          <p>{CurrentProduct.description}</p>
          <p>{CurrentProduct.name}</p>
          <p>{CurrentProduct.detailInfo.detailedDescription}</p>
        </div>

        <div>
          <img alt="디테일 이미지 2" src={CurrentProduct.detailImg[1]} />
          <p>WHY BOBSA</p>
          <img alt="" src="img/ProductDetail/WHY-BOBSA.png" />
        </div>
      </section>
    </div>
  );
}
