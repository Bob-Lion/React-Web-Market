import { useState, useEffect } from 'react';
import './ProductReviewPopup.scss';

const ProductReviewPopup = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const [TitleValue, setTitleValue] = useState('');
  const [ContentValue, setContentValue] = useState('');

  const onTitleChange = (e) => {
    setTitleValue(e.currentTarget.value);
  };
  console.log(TitleValue);

  const onContentChange = (e) => {
    setContentValue(e.currentTarget.value);
  };
  console.log(ContentValue);
  console.log(ContentValue.length);

  const onReset = () => {
    setTitleValue('');
    setContentValue('');
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'ReviewPopup' : 'ReviewPopupBtn'}>
      {open ? (
        <section className="ReviewPopupOpen">
          <header>
            {header}
            {/* <button className="ReviewPopupClose" onClick={close}>
              취소
            </button> */}
          </header>
          <main>
            {props.children}
            <div className="popup-review-background contents">
              <div className="popup-review-window">
                <section className="popup-review">
                  <div className="popup-review__container contents">
                    <div className="popup-review__container__header">
                      <div className="popup-review__container__header__title">
                        후기 작성
                      </div>
                      {/* <span>
                        <img
                          alt="창 닫기"
                          src="../assets/icons/Icon/exit.svg"
                        />
                      </span> */}
                    </div>
                    <div className="popup-review__container__title">
                      <img
                        alt="상품 이미지"
                        src="https://img-cf.kurly.com/shop/data/goods/165303902534l0.jpg"
                      />
                      <div>[델몬트] 바나나</div>
                    </div>
                    <div className="popup-review__container__main">
                      <div className="popup-review__container__main__title">
                        <div className="popup-review__container__main__title--title">
                          <span>제목</span>
                        </div>
                        <div className="popup-review__container__main__title--input">
                          <input
                            data-testid="input-box"
                            id="content42"
                            name="title"
                            placeholder="제목을 입력해 주세요"
                            type="text"
                            value={TitleValue}
                            onChange={onTitleChange}
                          />
                        </div>
                      </div>
                      <div className="popup-review__container__main__content">
                        <div className="popup-review__container__main__content--title">
                          <span>내용</span>
                        </div>
                        <div className="popup-review__container__main__content--input">
                          <textarea
                            aria-label="textarea-message"
                            cols="30"
                            data-name="content"
                            id="content47"
                            inputMode="text"
                            name="content"
                            rows="10"
                            value={ContentValue}
                            onChange={onContentChange}
                          ></textarea>
                          {/* <div
                            className="popup-review__container__main__content--input__placeholder"
                            data-name="info"
                            id="info"
                          >
                            <strong>후기 작성시 유의사항</strong>
                            <ul>
                              <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
                              <li>
                                해당 게시판의 성격과 다른 글은 사전동의 없이
                                담당 게시판으로 이동될 수 있습니다.
                              </li>
                              <li>
                                배송관련, 주문(취소/교환/환불)관련 문의 및
                                요청사항은 마이칼리 내 1:1 문의에 남겨주세요.
                              </li>
                            </ul>
                            <strong>제품</strong>
                            <ul>
                              <li>
                                입고일 : 품절 상품 입고 일이 확정된 경우,
                                섬네일에 기재되어 있습니다. (종 모양을 클릭하여,
                                재입고 알림 설정 가능)
                              </li>
                              <li>
                                제품 상세정보 : 영양성분 및 함량, 용량, 보관 및
                                취급 방법 등 제품 정보는 상세이미지 또는
                                상세정보에서 확인 가능합니다.
                              </li>
                            </ul>
                            <strong>주문취소</strong>
                            <ul>
                              <li>배송 단계별로 주문취소 방법이 상이합니다.</li>
                              <li>
                                [입금확인] 단계 : [마이칼리 {'>'}
                                주문내역 상세페이지]에서 직접 취소 가능
                              </li>
                              <li>[입금확인] 이후 단계 : 고객센터로 문의</li>
                              <li>
                                생산이 시작된 [상품 준비중] 이후에는 취소가
                                제한되는 점 고객님의 양해 부탁드립니다.
                              </li>
                              <li>
                                비회원은 모바일 App 또는 모바일 웹사이트에서
                                [마이칼리 {'>'} 비회원 주문 조회 페이지]에서
                                취소가 가능합니다.
                              </li>
                              <li>
                                일부 예약상품은 배송 3~4일 전에만 취소
                                가능합니다.
                              </li>
                            </ul>
                            <p>
                              ※ 주문 상품의 부분 취소는 불가능합니다. 전체 주문
                              취소 후 재구매 해주세요.
                            </p>
                            <strong>배송</strong>
                            <ul>
                              <li>
                                주문 완료 후 배송 방법(샛별/택배)은 변경이
                                불가능합니다.
                              </li>
                              <li>
                                배송일 배송시간 지정은 불가능합니다. (예약배송
                                포함)
                              </li>
                            </ul>
                            <p>
                              ※ 전화번호, 이메일, 주소, 계좌번호 등의 상세
                              개인정보가 문의 내용에 저장되지 않도록 주의해
                              주시기 바랍니다.
                            </p>
                          </div> */}
                          <span id="counter">
                            {' '}
                            {ContentValue.length} / 5,000자
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="popup-review__container__footer">
                      <div className="popup-review__container__footer__button">
                        <button
                          className="popup-review__container__footer__button__close"
                          data-name="cancel"
                          type="button"
                          onClick={() => {
                            close();
                            onReset();
                          }}
                        >
                          <span>X</span>
                        </button>
                        <button
                          disabled
                          className="popup-review__container__footer__button__submit"
                          data-name="review-send"
                          // id="send"
                          type="button"
                          // onClick={close}
                        >
                          <span>등록</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default ProductReviewPopup;
