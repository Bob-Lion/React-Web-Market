import classes from '@/components/Header/Header.module.scss';

import categoryGiftIcon from '@/../public/Header/categoryGiftIcon.svg';
import categoryVegetable from '@/../public/Header/categoryVegetable.svg';
import categoryFruit from '@/../public/Header/categoryFruit.svg';
import categoryAquaticProduct from '@/../public/Header/categoryAquaticProduct.svg';
import categoryMeat from '@/../public/Header/categoryMeat.svg';
import categorySoup from '@/../public/Header/categorySoup.svg';
import categorySalad from '@/../public/Header/categorySalad.svg';
import categorySeasoning from '@/../public/Header/categorySeasoning.svg';
import categoryDrink from '@/../public/Header/categoryDrink.svg';
import categorySnack from '@/../public/Header/categorySnack.svg';
import categoryBakery from '@/../public/Header/categoryBakery.svg';
import categoryHealthFood from '@/../public/Header/categoryHealthFood.svg';
import categoryWine from '@/../public/Header/categoryWine.svg';
import categoryTraditionalLiquor from '@/../public/Header/categoryTraditionalLiquor.svg';
import categoryHouseholdItem from '@/../public/Header/categoryHouseholdItem.svg';
import categorySkinCare from '@/../public/Header/categorySkinCare.svg';
import categoryHair from '@/../public/Header/categoryHair.svg';
import categoryKitchenWare from '@/../public/Header/categoryKitchenWare.svg';
import categoryElectronicProduct from '@/../public/Header/categoryElectronicProduct.svg';
import categoryPet from '@/../public/Header/categoryPet.svg';
import categoryBaby from '@/../public/Header/categoryBaby.svg';
import categoryTravel from '@/../public/Header/categoryTravel.svg';

function HeaderCategoryNav(){
  return(
    <>
      <div className={classes.catecory_nav} hidden>
        <ul >
          <li><img alt='' src= {categoryGiftIcon}/><a href='#!'> 선물하기</a></li>
          <li><img alt='' src= {categoryVegetable}/><a href='#!'> 채소</a></li>
          <li><img alt='' src= {categoryFruit}/><a href='#!'> 과일 · 견과 · 쌀</a></li>
          <li><img alt='' src= {categoryAquaticProduct}/><a href='#!'> 수산 · 해산 · 건어물</a></li>
          <li><img alt='' src= {categoryMeat}/><a href='#!'> 정육 · 계란</a></li>
          <li><img alt='' src= {categorySoup}/><a href='#!'> 국 · 반찬 · 메인요리</a></li>
          <li><img alt='' src= {categorySalad}/><a href='#!'> 샐러드 · 간편식</a></li>
          <li><img alt='' src= {categorySeasoning}/><a href='#!'> 면 · 양념 · 오일</a></li>
          <li><img alt='' src= {categoryDrink}/><a href='#!'> 생수 · 음료 · 우유 · 커피</a></li>
          <li><img alt='' src= {categorySnack}/><a href='#!'> 간식 · 과자 · 떡</a></li>
          <li><img alt='' src= {categoryBakery}/><a href='#!'> 베이커리 · 치즈 · 델리</a></li>
          <li><img alt='' src= {categoryHealthFood}/><a href='#!'> 건강식품</a></li>
          <li><img alt='' src= {categoryWine}/><a href='#!'> 와인</a></li>
          <li><img alt='' src= {categoryTraditionalLiquor}/><a href='#!'> 전통주</a></li>
          <li><img alt='' src= {categoryHouseholdItem}/><a href='#!'> 생활용품 · 리빙 · 캠핑</a></li>
          <li><img alt='' src= {categorySkinCare}/><a href='#!'> 스킨케어 · 메이크업</a></li>
          <li><img alt='' src= {categoryHair}/><a href='#!'> 헤어 · 바디 · 구강</a></li>
          <li><img alt='' src= {categoryKitchenWare}/><a href='#!'> 주방용품</a></li>
          <li><img alt='' src= {categoryElectronicProduct}/><a href='#!'>가전제품</a></li>
          <li><img alt='' src= {categoryPet}/><a href='#!'> 반려동물</a></li>
          <li><img alt='' src= {categoryBaby}/><a href='#!'> 베이비 · 키즈 · 완구</a></li>
          <li><img alt='' src= {categoryTravel}/><a href='#!'> 여행 · 티켓</a></li>
        </ul>
      </div>
    </>
  )
}

export default HeaderCategoryNav;