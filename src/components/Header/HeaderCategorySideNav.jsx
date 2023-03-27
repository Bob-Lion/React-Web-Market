import classes from '@/components/Header/Header.module.scss';
import { useRef} from 'react'; 

function HeaderCategorySideNav(
  {setHover,hoverNavUnListState,setHoverNavUnList,
    categoryGiftState,setCategoryGift,
    categoryVegetableState, setCategoryVegetable,
    categoryFruitState,setCategoryFruit,
    categoryAquaticProductState, setCategoryAquaticProduct,
    categoryMeatState, setCategoryMeat,
    categorySoupState, setCategorySoup,
    categorySaladState, setCategorySalad,
    categorySeasoningState, setCategorySeasoning,
    categoryDrinkState, setCategoryDrink,
    categorySnackState, setCategorySnack,
    categoryBakeryState, setCategoryBakery,
    categoryHealthFoodState, setCategoryHealthFood,
    categoryWineState, setCategoryWine,
    categoryTraditionalLiquorState, setCategoryTraditionalLiquor,
    categoryHouseholdItemState, setCategoryHouseholdItem,
    categorySkinCareState, setCategorySkinCare,
    categoryHairState, setCategoryHair,
    categoryKitchenWareState, setCategoryKitchenWare,
    categoryElectronicProductState, setCategoryElectronicProduct,
    categoryPetState, setCategoryPet,
    categoryBabyState, setCategoryBaby,
    categoryTravelState, setCategoryTravel
  }
  ){

  const categorySideNavRef=useRef(); //side nav

  const handleMouseEnterSideNav=()=>{
    setHover(true) 
    setHoverNavUnList(true)
  }
  const handleMouseLeaveSideNav=()=>{
    setHover(false)
    setHoverNavUnList(false)
  }
  

  return(
    <div >
      <div className={classes.header_catecory__side_nav__wrapper} ref={categorySideNavRef}  
      hidden ={hoverNavUnListState ? false : true} onMouseEnter={handleMouseEnterSideNav} onMouseLeave={handleMouseLeaveSideNav} >
        {/* 선물하기 */}
        <ul className={classes.header_catecory__side_nav__gift}  hidden={categoryGiftState ? false: true}  
          onMouseEnter={()=>{setCategoryGift(true)}}    onMouseLeave={()=>{setCategoryGift(false)}}  >  
          <li ><a href='#!'> 화장품 · 스킨 · 케어</a></li>
          <li ><a href='#!'> 건강보조식품 · 영양제</a></li>
          <li ><a href='#!'> 후드티 · 상의 · 하의</a></li>
          <li ><a href='#!'> 모자 · 신발 · 향수 · 시계</a></li>
          <li ><a href='#!'> 목도리 · 운동화 · cgv</a></li>
          <li ><a href='#!'> 롯데시네마 · 메가박스 · 메가커피</a></li>
          <li ><a href='#!'> 할리스 · 이디야 · 스타벅스</a></li>
          <li ><a href='#!'> 선물 · 고기 </a></li>
        </ul>
       {/* 채소 */}
        <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryVegetableState ? false: true}
          onMouseEnter={()=>{setCategoryVegetable(true)}}    onMouseLeave={()=>{setCategoryVegetable(false)}} >
          <li><a href='#!'> 친환경</a></li> 
          <li><a href='#!'> 고구마 · 감자 · 당근</a></li>
          <li><a href='#!'> 시금치 · 쌈채소 · 나물</a></li>
          <li><a href='#!'> 브로콜리 · 파프리카 · 양배추</a></li>
          <li><a href='#!'> 양파 · 대파 · 마늘 · 배추</a></li>
          <li><a href='#!'> 국 · 반찬 · 메인요리</a></li>
          <li><a href='#!'> 오이 · 호박 · 고추</a></li>
          <li><a href='#!'> 냉동 · 이색 · 간편채소</a></li>
          <li><a href='#!'> 콩나물 · 버섯 </a></li>
        </ul>
      {/* 과일 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryFruitState ? false: true} 
          onMouseEnter={()=>{setCategoryFruit(true)}}    onMouseLeave={()=>{setCategoryFruit(false)}} >
          <li><a href='#!'> 친환경</a></li>
          <li><a href='#!'> 제철 과일</a></li>
          <li><a href='#!'> 국산 과일</a></li>
          <li><a href='#!'> 수입 과일</a></li>
          <li><a href='#!'> 간편 과일</a></li>
          <li><a href='#!'> 냉동 · 건과일</a></li>
          <li><a href='#!'> 견과류</a></li>
          <li><a href='#!'> 쌀 · 잡곡 </a></li>
        </ul>
      {/* 수산 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categoryAquaticProductState ? false: true} 
          onMouseEnter={()=>{setCategoryAquaticProduct(true)}}    onMouseLeave={()=>{setCategoryAquaticProduct(false)}} >
          <li><a href='#!'> 제철 수산</a></li>
          <li><a href='#!'> 생선류</a></li>
          <li><a href='#!'> 굴비 · 반건류</a></li>
          <li><a href='#!'> 오징어 · 낙지 · 문어</a></li>
          <li><a href='#!'> 새우 · 게 · 랍스터</a></li>
          <li><a href='#!'> 해산물 조개류</a></li>
          <li><a href='#!'> 수산가공품</a></li>
          <li><a href='#!'> 김 · 미역 · 해조류</a></li>
        </ul>
      {/* 정육 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categoryMeatState ? false: true} 
          onMouseEnter={()=>{setCategoryMeat(true)}}    onMouseLeave={()=>{setCategoryMeat(false)}} >
          <li><a href='#!'> 국내산 소고기</a></li>
          <li><a href='#!'> 수입산 소고기</a></li>
          <li><a href='#!'> 돼지고기</a></li>
          <li><a href='#!'> 계란류</a></li>
          <li><a href='#!'> 닭 · 오리고기</a></li>
          <li><a href='#!'> 양념육 · 돈까스</a></li>
          <li><a href='#!'>양고기</a></li>
        </ul>
      {/* 국 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categorySoupState ? false: true} 
          onMouseEnter={()=>{setCategorySoup(true)}}    onMouseLeave={()=>{setCategorySoup(false)}} >
          <li><a href='#!'> 국 · 탕 · 찌개</a></li>
          <li><a href='#!'> 밀키트 · 메인요리</a></li>
          <li><a href='#!'> 밑반찬</a></li>
          <li><a href='#!'> 김치 · 젓갈 · 장류</a></li>
          <li><a href='#!'> 두부 · 어묵 · 부침개</a></li>
          <li><a href='#!'> 베이컨 · 햄 · 통조림</a></li>
        </ul>
      {/* 샐러드 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categorySaladState ? false: true} 
          onMouseEnter={()=>{setCategorySalad(true)}}    onMouseLeave={()=>{setCategorySalad(false)}} >
          <li><a href='#!'> 샐러드 · 닭가슴살</a></li>
          <li><a href='#!'> 도시락 · 밥류</a></li>
          <li><a href='#!'> 파스타 · 면류</a></li>
          <li><a href='#!'> 떡볶이 · 튀김 · 순대</a></li>
          <li><a href='#!'> 피자 · 핫도그 · 만두</a></li>
          <li><a href='#!'> 폭립 · 떡갈비 · 안주</a></li>
          <li><a href='#!'> 죽 · 스프 · 카레</a></li>
          <li><a href='#!'> 선식 · 시리얼</a></li>
        </ul>
      {/* 면 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categorySeasoningState ? false: true} 
          onMouseEnter={()=>{setCategorySeasoning(true)}}    onMouseLeave={()=>{setCategorySeasoning(false)}} >
          <li><a href='#!'> 파스타 · 면류</a></li>
          <li><a href='#!'> 식초 · 소스 · 드레싱</a></li>
          <li><a href='#!'> 양념 · 액젓 · 장류</a></li>
          <li><a href='#!'> 식용유 · 참기름 · 오일</a></li>
          <li><a href='#!'> 소금 · 설탕 · 향신료</a></li>
          <li><a href='#!'> 밀가루 · 가루 · 믹스</a></li>
        </ul>
      {/* 생수 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categoryDrinkState ? false: true} 
          onMouseEnter={()=>{setCategoryDrink(true)}}    onMouseLeave={()=>{setCategoryDrink(false)}} >
          <li><a href='#!'> 생수 · 탄산수</a></li>
          <li><a href='#!'> 음료 · 주스</a></li>
          <li><a href='#!'> 우유 · 두유 · 요거트</a></li>
          <li><a href='#!'> 커피</a></li>
          <li><a href='#!'> 차</a></li>
        </ul>
      {/* 간식 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categorySnackState ? false: true}  
          onMouseEnter={()=>{setCategorySnack(true)}}    onMouseLeave={()=>{setCategorySnack(false)}} >
          <li><a href='#!'> 파스타 · 면류</a></li>
          <li><a href='#!'> 과자 · 스낵 · 쿠키</a></li>
          <li><a href='#!'> 양념 · 액젓 · 장류</a></li>
          <li><a href='#!'> 초콜릿 · 젤리 · 캔디</a></li>
          <li><a href='#!'> 떡 · 한과</a></li>
          <li><a href='#!'> 아이스크림</a></li>
        </ul>
      {/* 베이커리 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={ categoryBakeryState ? false: true} 
          onMouseEnter={()=>{setCategoryBakery(true)}}    onMouseLeave={()=>{setCategoryBakery(false)}} >
          <li><a href='#!'> 식빵 · 빵류</a></li>
          <li><a href='#!'> 잼 · 버터 · 스프레드</a></li>
          <li><a href='#!'> 케이크 · 파이 · 디저트</a></li>
          <li><a href='#!'> 치즈</a></li>
          <li><a href='#!'> 델리</a></li>
          <li><a href='#!'> 올리브 · 피클 </a></li>
        </ul>
      {/* 건강 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryHealthFoodState ? false: true} 
          onMouseEnter={()=>{setCategoryHealthFood(true)}}    onMouseLeave={()=>{setCategoryHealthFood(false)}} >
          <li><a href='#!'> 영양제</a></li>
          <li><a href='#!'> 유산균</a></li>
          <li><a href='#!'> 홍삼 · 인삼 · 꿀</a></li>
          <li><a href='#!'> 건강즙 · 건강음료</a></li>
          <li><a href='#!'> 건강분말 · 건강환</a></li>
          <li><a href='#!'> 다이어트 · 이너뷰티</a></li>
          <li><a href='#!'> 유·아동</a></li>
        </ul>
      {/* 와인 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryWineState ? false: true} 
          onMouseEnter={()=>{setCategoryWine(true)}}    onMouseLeave={()=>{setCategoryWine(false)}} >
          <li><a href='#!'> 레드와인</a></li>
          <li><a href='#!'> 화이트와인</a></li>
          <li><a href='#!'> 샴페인 · 스파클링</a></li>
        </ul>
      {/* 전통주 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryTraditionalLiquorState ? false: true} 
          onMouseEnter={()=>{setCategoryTraditionalLiquor(true)}}    onMouseLeave={()=>{setCategoryTraditionalLiquor(false)}} >
          <li><a href='#!'> 막걸리 · 탁주</a></li>
          <li><a href='#!'> 증류주 · 약주 · 청주</a></li>
          <li><a href='#!'> 과실주 · 리큐르</a></li>
          <li><a href='#!'> 전통주 선물세트</a></li>
        </ul>
      {/* 생활용품 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryHouseholdItemState ? false: true} 
          onMouseEnter={()=>{setCategoryHouseholdItem(true)}}    onMouseLeave={()=>{setCategoryHouseholdItem(false)}} >
          <li><a href='#!'> 휴지 · 티슈</a></li>
          <li><a href='#!'> 여성 · 위생 용품</a></li>
          <li><a href='#!'> 세제 · 청소 용품</a></li>
          <li><a href='#!'> 화훼 · 인테리어 소품</a></li>
          <li><a href='#!'> 의약외품 · 마스크</a></li>
          <li><a href='#!'> 생활 잡화 · 문구</a></li>
          <li><a href='#!'> 캠핑 용품</a></li>
        </ul>
      {/* 스킨케어 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categorySkinCareState ? false: true} 
          onMouseEnter={()=>{setCategorySkinCare(true)}}    onMouseLeave={()=>{setCategorySkinCare(false)}} >
          <li><a href='#!'> 스킨 · 미스트 · 패드 </a></li>
          <li><a href='#!'> 에센스 · 앰플 · 로션</a></li>
          <li><a href='#!'> 크림 · 오일</a></li>
          <li><a href='#!'> 클렌징</a></li>
          <li><a href='#!'> 마스크팩</a></li>
          <li><a href='#!'> 선케어</a></li>
          <li><a href='#!'> 메이크업</a></li>
          <li><a href='#!'> 맨즈케어</a></li>
          <li><a href='#!'> 뷰티소품 · 기기</a></li>
        </ul>
      {/* 헤어 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryHairState ? false: true} 
          onMouseEnter={()=>{setCategoryHair(true)}}    onMouseLeave={()=>{setCategoryHair(false)}} >
          <li><a href='#!'> 구강 · 면도 </a></li>
          <li><a href='#!'> 샴푸 · 컨디셔너</a></li>
          <li><a href='#!'> 트리트먼트 · 팩</a></li>
          <li><a href='#!'> 헤어에센스 · 염모</a></li>
          <li><a href='#!'> 바디워시 · 스크럽</a></li>
          <li><a href='#!'> 바디로션 · 크림</a></li>
          <li><a href='#!'> 핸드 · 립 · 데오</a></li>
          <li><a href='#!'> 향수 · 디퓨저</a></li>
          <li><a href='#!'> 헤어 · 바디소품</a></li>
        </ul>
      {/* 주방용품 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryKitchenWareState ? false: true} 
          onMouseEnter={()=>{setCategoryKitchenWare(true)}}    onMouseLeave={()=>{setCategoryKitchenWare(false)}} >
          <li><a href='#!'> 주방 소모품 · 잡화 </a></li>
          <li><a href='#!'> 주방 · 도리조구</a></li>
          <li><a href='#!'> 냄비 · 팬 · 솥</a></li>
          <li><a href='#!'> 보관용기 · 텀블러</a></li>
          <li><a href='#!'> 식기 · 테이블웨어</a></li>
          <li><a href='#!'> 컵 · 잔 · 커피도구</a></li>
        </ul>
      {/* 가전제품 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryElectronicProductState ? false: true} 
          onMouseEnter={()=>{setCategoryElectronicProduct(true)}}    onMouseLeave={()=>{setCategoryElectronicProduct(false)}} >
          <li><a href='#!'> 주방 가전 </a></li>
          <li><a href='#!'> 생활 가전</a></li>
          <li><a href='#!'> 계절 가전</a></li>
          <li><a href='#!'> 디지털 · PC</a></li>
          <li><a href='#!'> 대형 · 설치 가전</a></li>
        </ul>
      {/* 반려동물 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryPetState ? false: true} 
          onMouseEnter={()=>{setCategoryPet(true)}}    onMouseLeave={()=>{setCategoryPet(false)}} >
          <li><a href='#!'> 강아지 간식 </a></li>
          <li><a href='#!'> 강아지 주식</a></li>
          <li><a href='#!'> 고양이 간식</a></li>
          <li><a href='#!'> 고양이 주식</a></li>
          <li><a href='#!'> 건강 관리</a></li>
          <li><a href='#!'> 배변 · 위생</a></li>
          <li><a href='#!'> 장난감</a></li>
          <li><a href='#!'> 미용 · 외출 · 하우스</a></li>
        </ul>
      {/* 베이비 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryBabyState ? false: true} 
          onMouseEnter={()=>{setCategoryBaby(true)}}    onMouseLeave={()=>{setCategoryBaby(false)}} >
          <li><a href='#!'> 분유 · 간편 이유식 </a></li>
          <li><a href='#!'> 이유식 재료</a></li>
          <li><a href='#!'> 간식 · 음식</a></li>
          <li><a href='#!'> 건강 식품</a></li>
          <li><a href='#!'> 이유 · 수유 용품</a></li>
          <li><a href='#!'> 기저귀 · 물티슈</a></li>
          <li><a href='#!'> 세제 · 위생 용품</a></li>
          <li><a href='#!'> 스킨 · 구강 케어</a></li>
          <li><a href='#!'> 완구 · 잡화류</a></li>
        </ul>
      {/* 여행 */}
      <ul className={classes.header_catecory__side_nav__vegetable} hidden={categoryTravelState ? false: true}
          onMouseEnter={()=>{setCategoryTravel(true)}}    onMouseLeave={()=>{setCategoryTravel(false)}} >
          <li><a href='#!'> 국내 여행 </a></li>
          <li><a href='#!'> 해외 여행</a></li>
          <li><a href='#!'> 전시회 · 입장권</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderCategorySideNav;