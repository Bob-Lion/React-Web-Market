import React from 'react';

const ProductReviewUser = () => {
  if (1) {
    return (
      <div className="ProductReviewListContentReviewDiv">
        <section className="empty">
          <article>
            <img
              alt="후기 없음"
              src="https://cdn-icons-png.flaticon.com/512/87/87980.png "
            />
            <span>따뜻한 첫 후기를 기다리고 있어요.</span>
          </article>
        </section>
      </div>
    );
  } else {
    return (
      <div className="ProductReviewListContentReviewDiv">
        <div>
          <span>베스트</span>
          <span>퍼플</span>
          <span>김*진</span>
        </div>
        <article>
          <h3>[풀무원] 탱탱쫄면 (4개입)</h3>
          <p>너무 맛있어여~ 면이 쫄깃하고 양념도 짱맛나요!!</p>
          <footer>2022.11.10</footer>
        </article>
      </div>
    );
  }
};

export default ProductReviewUser;
