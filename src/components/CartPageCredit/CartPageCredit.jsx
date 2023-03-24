import styles from './CartPageCredit.module.scss';
import serchIcon from '@/../public/icons/web-icons/Search.svg';
import { useRecoilState } from 'recoil';
import { selectInfoState } from '@/@atom/cartPage/selectInfoState';
import { useEffect, useState } from 'react';

export function CartPageCredit() {
  const [selectInfo, setSelectInfo] = useRecoilState(selectInfoState);

  // const [totalPrice, setTotalPrice] = useState(0);

  console.log(selectInfo);
  // console.log('aa');

  let totalPrice = 0;

  if (selectInfo.length > 0) {
    totalPrice = selectInfo.map((a) => a.price).reduce((a, b) => a + b);
  }

  // const totalPrice = () => {
  //   selectInfo.map((a) => a.price).reduce((a, b) => a + b);
  // }

  // const sumPrice = selectInfo.reduce((a, b) => {
  //   return a.price + b;
  // });

  // setTotalPrice(sumPrice);

  // console.log(totalPrice);

  return (
    <div className={styles.cartCredit}>
      <div className={styles.cartCreditContainer}>
        <div className={styles.cartCreditAddress}>
          <p className={styles.cartCreditAddressTitle}>배송지</p>
          <div className={styles.cartCreditAddressInfo}>
            <p className={styles.cartCreditAddressInfoText}>
              <em className={styles.cartCreditAddressInfoTextEm}>
                배송지를 등록
              </em>
              하고
              <br />
              <span>구매 가능한 상품을 확인하세요!</span>
            </p>
            <button
              type="button"
              className={styles.cartCreditAddressInfoSerchBtn}
            >
              <span className={styles.cartCreditAddressInfoSerchBtnText}>
                <img
                  className={styles.cartCreditAddressInfoSerchBtnTextImg}
                  src={serchIcon}
                  alt="이미지 검색 돋보기 아이콘"
                />
                <span>주소 검색</span>
              </span>
            </button>
          </div>
        </div>
        <div className={styles.cartCreditTotalPrice}>
          <div className={styles.cartCreditTotalPriceInfo}>
            <span className={styles.cartCreditTotalPriceText}>상품금액</span>
            <span className={styles.cartCreditTotalPriceNumber}>
              {totalPrice}
              <span className={styles.cartCreditTotalPriceWon}>원</span>
            </span>
          </div>
          <div className={styles.cartCreditTotalPriceSale}>
            <span className={styles.cartCreditTotalPriceText}>
              상품할인금액
            </span>
            <span className={styles.cartCreditTotalPriceNumber}>
              0<span className={styles.cartCreditTotalPriceWon}>원</span>
            </span>
          </div>
          <p className={styles.cartCreditTotalPriceSaleDs}>
            로그인 후 할인 금액 적용
          </p>
          <div className={styles.cartCreditTotalPriceDelivery}>
            <span className={styles.cartCreditTotalPriceText}>배송비</span>
            <span className={styles.cartCreditTotalPriceNumber}>
              {totalPrice > 40000 ? 0 : 3000}
              <span className={styles.cartCreditTotalPriceWon}>원</span>
            </span>
          </div>
          {totalPrice < 40000 ? (
            <p className={styles.cartCreditTotalPriceDeliveryDs}>
              {40000 - totalPrice}원 추가주문 시, <strong>무료배송</strong>
            </p>
          ) : null}
          <div className={styles.cartCreditTotalPriceCreditPrice}>
            <span className={styles.cartCreditTotalPriceText}>
              결제예정금액
            </span>
            <span className={styles.cartCreditTotalPriceCreditPriceText}>
              <strong className={styles.cartCreditTotalPriceCreditPriceStrong}>
                {totalPrice > 40000 ? totalPrice : totalPrice + 3000}
              </strong>
              <span className={styles.cartCreditTotalPriceWon}>원</span>
            </span>
          </div>
        </div>
        <div className={styles.cartCreditOrder}>
          <button className={styles.cartCreditOrderBtn} type="button">
            <span className={styles.cartCreditOrderBtnText}>
              배송지를 입력해주세요
            </span>
          </button>
          <ul className={styles.cartCreditOrderExplanation}>
            <li
              className={styles.cartCreditOrderExplanationList}
            >{`[주문완료] 상태일 경우에만 주문 취소 가능합니다.`}</li>
            <li
              className={styles.cartCreditOrderExplanationList}
            >{`[밥을사자 > 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
