import React, { useState, useEffect } from 'react';
import './ProductReview.scss';
import ProductReviewUser from './ProductReviewUser';
import ProductReviewPopup from './ProductReviewPopup';

const ProductReview = () => {
  const [ispopup, setIsPopup] = useState(false);

  const handlePopup = () => {
    return setIsPopup(true);
  };
  const closePopup = () => {
    return setIsPopup(false);
  };

  return (
    <div>
      <div className="ProductReview" id="review">
        <section className="ProductReviewSection">
          <header>
            <h2>상품후기</h2>
          </header>
          <button
            className="ProductReviewSectionWrite"
            type="button"
            onClick={handlePopup}
          >
            후기 작성하기
          </button>
          <ProductReviewPopup
            close={closePopup}
            // header="후기 작성"
            open={ispopup}
          />
          <ul>
            <li className="ProductReviewSectionBold">
              글후기 50원 적립금 혜택이 있어요.
            </li>
            <li>
              퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시
              5,000원 추가
            </li>
            <li>적립 후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
            <li>
              작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균
              1~2일 소요)
            </li>
          </ul>
        </section>
        <section className="ProductReviewList">
          <div className="ProductReviewListTotal">
            <span id="review-counter">총 1개</span>
            <div>
              <button type="button">추천순</button>
              <button type="button">최근 등록순</button>
            </div>
          </div>

          <div className="ProductReviewListNoti">
            <span className="ProductReviewListNoti--notice">공지</span>
            <span>금주의 베스트 후기 안내</span>
          </div>
          <div className="ProductReviewListNoti">
            <span className="ProductReviewListNoti--notice">공지</span>
            <span>상품 후기 적립금 정책 안내</span>
          </div>
          <div className="ProductReviewListContent">
            <div className="ProductReviewListContentReview">
              <div id="review-inner"></div>
              <ProductReviewUser />
              <div className="ProductReviewListContentReviewButton">
                <button className="ProductReviewListContentReviewButtonLeft"></button>
                <button className="ProductReviewListContentReviewButtonRight"></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductReview;
