import '@/styles/global.scss';
import '@/styles/reset.scss';
import '@/styles/normalize.scss';
import classes from '@/components/Footer/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerInner}>
        <div className={classes.footerInnerTop}>
          <section className={classes.customerCenter}>
            <h3 className={classes.title}>고객행복센터</h3>
            <ul>
              <li className={classes.contact}>
                <span className={classes.tel}>1644-1107</span>
                <span className={classes.info}>월~토요일 오전 7시 - 오후 6시</span>
              </li>
              <li className={classes.item}>
                <a className={classes.itemTitle} href="/">카카오톡 문의</a>
                <div className={classes.itemInfo}>
                  <p>
                    <span>월~토요일</span>
                    <span>오전 7시 - 오후 6시</span>
                  </p>
                  <p>
                    <span>일/공휴일</span>
                    <span>오전 7시 - 오후 1시</span>
                  </p>
                </div>
              </li>
              <li className={classes.item}>
                <a className={classes.itemTitle} href="/">1:1 문의</a>
                <div className={classes.itemInfo}>
                  <p>365일</p>
                  <p>고객센터 운영시간에 순차적으로 답변 드리겠습니다.</p>
                </div>
              </li>
              <li className={classes.item}>
                <a className={classes.itemTitle} href="/">대량주문 문의</a>
                <div className={classes.itemInfo}>
                  <p>
                    <span>월~금요일</span>
                    <span>오전 9시 - 오후 6시</span>
                  </p>
                  <p>
                    <span>점심시간</span>
                    <span>낮 12시 - 오후 1시</span>
                  </p>
                </div>
              </li>
              <li className={classes.nonMember}>
                <p>비회원 문의 : <a href="mailto:help@boblion.com">help@boblion.com</a></p>
                <p>비회원 대량주문 문의 : <a href="mailto:bobgift@boblion.com">help@boblion.com</a></p>
              </li>
            </ul>
          </section>
          <section className={classes.aboutKarly}>
            <h3 className={classes.a11yHidden}>밥을사자 관련 정보</h3>
            <ul className={classes.link}>
              <li>
                <a href="https://www.kurly.com/introduce">밥사소개</a>
              </li>
              <li>
                <a href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&showinfo=0&wmode=opaque&enablejsapi=1">밥사소개영상</a>
              </li>
              <li>
                <a href="https://kurly.career.greetinghr.com/" rel="noreferrer" target="_blank">인재채용</a>
              </li>
              <li>
                <a href="https://www.kurly.com/user-terms/agreement">이용약관</a>
              </li>
              <li>
                <a href="https://www.kurly.com/user-terms/privacy-policy">개인정보처리방침</a>
              </li>
              <li>
                <a href="https://www.kurly.com/user-guide">이용안내</a>
              </li>
            </ul>
            <ul className={classes.info}>
              <li>
                <span>법인명 (상호) : 주식회사 밥사</span>
                <span>사업자등록번호 : 261-81-23567 <a href="/" target="_blank">사업자정보 확인</a></span>
              </li>
              <li>
                <span>통신판매업 : 제 2018-서울강남-01646 호</span>
                <span>개인정보보호책임자 : 이원준</span>
              </li>
              <li>
                <span>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</span>
                <span>대표이사 : 김슬아</span>
              </li>
              <li>
                <span>입점문의 : <a href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform" rel="noreferrer" target="_blank">입점문의하기</a></span>
                <span>제휴문의 : <a href="mailto:business@boblion.com">business@boblion.com</a></span>
              </li>
              <li>
                채용문의 : <a href="mailto:recruit@karlycorp.com">recruit@boblion.com</a>
              </li>
              <li>팩스 : 070 - 7500 - 6098</li>
            </ul>
            <ul className={classes.socialMedia}>
              <li>
                <a href="https://www.instagram.com/marketkurly/" rel="noreferrer" target="_blank">
                  <img alt="밥을사자 인스타그램 바로가기" className="instagramLogo" src="img/Footer/instagram.svg" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Marketkurly/" rel="noreferrer" target="_blank">
                <img alt="밥을사자 페이스북 바로가기" className="facebookLogo" src="img/Footer/facebook.svg" />
                </a>
              </li>
              <li>
                <a href="https://blog.naver.com/marketkurly" rel="noreferrer" target="_blank">
                  <img alt="밥을사자 네이버 블로그 바로가기" className="blogLogo" src="img/Footer/blog.svg" />
                </a>
              </li>
              <li>
                <a href="https://m.post.naver.com/marketkurly" rel="noreferrer" target="_blank">
                  <img alt="밥을사자 네이버 포스트 바로가기" className="postLogo" src="img/Footer/naverpost.svg" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" rel="noreferrer" target="_blank">
                  <img alt="밥을사자 유튜브 바로가기" className="youtubeLogo" src="img/Footer/youtube.svg" />
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className={classes.footerInnerBottom}>
          <button type="button">
            <img alt="정보보호 관리체계 인증서 보기" className="ismsLogo" src="img/Footer/logo_isms.svg" />
            <p>
              [인증범위] 밥사 쇼핑몰 서비스 개발·운영
              <br/>(심사받지 않은 물리적 인프라 제외)
              <br/>[유효기간]2022.01.19~2025.01.18
            </p>
          </button>
          <button type="button">
            <img alt="ePRIVACY PLUS 인증서 보기" className="ePrivacyLogo" src="img/Footer/logo_privacy.svg" />
            <p>
              개인정보보호 우수 웹 사이트·
              <br/>개인정보처리시스템 인증 (ePRIVACY PLUS)
            </p>
          </button>
          <button type="button">
            <img alt="토스 페이먼츠 정보 보기" className="tossPaymentsLogo" src="img/Footer/logo_tosspayments.svg" />
            <p>
              토스페이먼츠 구매안전(에스크로)
              <br/>서비스를 이용하실 수 있습니다.
            </p>
          </button>
          <button type="button">
            <img alt="우리은행 채무지급보증서 보기" className="wooriBankLogo" src="img/Footer/logo_wooriBank.svg" />
            <p>
              고객님이 현금으로 결제한 금액에 대해
              <br/>우리은행과 채무지급보증 계약을 체결하여
              <br/>안전거래를 보장하고 있습니다.
            </p>
          </button>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <h3 className={classes.a11yHidden}>서비스 및 사업 인증서</h3>
        <p>
          밥사에서 판매되는 상품 중에는 밥사에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          <br/>마켓플레이스(오픈마켓) 상품의 경우 밥사는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 밥사는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        </p>
        <span>© BOB-LION. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  )
}

export default Footer;