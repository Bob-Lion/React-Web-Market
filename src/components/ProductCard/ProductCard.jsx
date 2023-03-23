import AddCartShortcutBtn from '@/components/AddCartShortcutBtn/AddCartShortcutBtn';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useReadData } from '@/firebase/firestore';
import classes from './ProductCard.module.scss';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
            {/* {reviewCount ? <div>reviewCount{reviewCount}</div> : null} */}
          </div>
        </button>
        <AddCartShortcutBtn />
      </div>
    );
  } else {
    // setData(content);
    return <div className={'ProductCard'}></div>;
  }
}
