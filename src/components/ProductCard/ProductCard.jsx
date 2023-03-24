import AddCartShortcutBtn from '@/components/AddCartShortcutBtn/AddCartShortcutBtn';
import classes from './ProductCard.module.scss';
import { useSetRecoilState } from 'recoil';
import { currentProductState } from '@/@atom/currentProductState';
import { changePriceNumToString } from '@/utils/priceNumberToString';

export default function ProductCard(props) {
  const { content } = props;

  const setCurrentProductState = useSetRecoilState(currentProductState);

  function handleOnClick() {
    setCurrentProductState(content);
  }

  if (content) {
    const {
      id = null,
      mainImg = '',
      name = null,
      detailInfo = null,
      saleRatio = null,
      salePrice = null,
      price = null,
      description = null,
      isBobOnly = null,
      isLimited = null,
      reviewCount = null,
    } = content;
    // console.log('ProductCardContent', content);
    let shippingWay = null;
    if (detailInfo) {
      shippingWay = detailInfo.shippingWay;
    }
    // if (mainImg != '') {
    //   console.log(mainImg);
    // }

    // console.log(typeof saleRatio, saleRatio);

    return (
      <div className="ProductCard">
        <div className="a11y-hidden">{id}</div>
        <button
          className="ProductCardMainWrapper"
          type="button"
          onClick={() => {
            handleOnClick();
          }}
        >
          <figure>
            <img alt={name} src={mainImg} />
            <figcaption className="a11y-hidden">{name}</figcaption>
          </figure>

          <div className="ProductCardInfoWrapper">
            <mark className="ProductCardShippingInfo">{shippingWay}</mark>

            <mark className="ProductCardProductName">{name}</mark>

            <div className="ProductCardProductDetail">{description}</div>
            <div className="ProductCardPriceWrapper">
              {saleRatio > 0 ? (
                <mark className="ProductCardDiscountRate">{saleRatio}%</mark>
              ) : null}

              <mark className="ProductCardSellPrice">
                {changePriceNumToString(salePrice)}
              </mark>
            </div>

            {saleRatio > 0 ? (
              <h3 className="ProductCardUndiscountedPrice">
                {changePriceNumToString(price)}
              </h3>
            ) : null}

            {isBobOnly && isLimited ? (
              <div className="ProductCardBadgeWrapper">
                <mark className="ProductCardBobOnly"></mark>
                <mark className="ProductCardLimitedProducts"></mark>
              </div>
            ) : isBobOnly ? (
              <div className="ProductCardBadgeWrapper">
                <mark className="ProductCardBobOnly"></mark>
              </div>
            ) : isLimited ? (
              <div className="ProductCardBadgeWrapper">
                <mark className="ProductCardLimitedProducts"></mark>
              </div>
            ) : null}
            {reviewCount ? (
              <div className="ProductCardReviewCount">
                <div className="ProductCardReviewCountIcon">
                  <svg
                    fill="none"
                    height="100%"
                    viewBox="0 0 14 14"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask fill="white" id="path-1-inside-1_1513_17755">
                      <path
                        clipRule="evenodd"
                        d="M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z"
                        fillRule="evenodd"
                      ></path>
                    </mask>
                    <path
                      d="M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z"
                      fill="#999"
                      mask="url(#path-1-inside-1_1513_17755)"
                    ></path>
                    <circle
                      cx="4.34998"
                      cy="6.17871"
                      fill="#999"
                      r="0.75"
                    ></circle>
                    <circle
                      cx="6.75"
                      cy="6.17871"
                      fill="#999"
                      r="0.75"
                    ></circle>
                    <circle
                      cx="9.15002"
                      cy="6.17871"
                      fill="#999"
                      r="0.75"
                    ></circle>
                  </svg>
                </div>
                후기
                <span>{convertReviewCount(reviewCount)}</span>
              </div>
            ) : null}
          </div>
        </button>
        <AddCartShortcutBtn content={content} />
      </div>
    );
  } else {
    // setData(content);
    return <div className={'ProductCard'}></div>;
  }
}

function convertReviewCount(reviewCount) {
  if (reviewCount > 9999) {
    return '9,999+';
  }
  if (reviewCount > 999) {
    return '999+';
  } else {
    return reviewCount;
  }
}
