import { useState, useEffect, useRef } from 'react';

import classes from '@/components/Header/Header.module.scss';

import HeaderCategorySideNav from '@/components/Header/HeaderCategorySideNav';

import categoryIcon from '@/../public/Header/categoryIcon.svg';

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

function HeaderCategory({Fixed}){
  const categoryRef = useRef(); //카테고리 버튼
  const categoryNavRef=useRef(); //밑 메뉴
  const categoryNavUnListRef=useRef(); //밑 메뉴의 ul리스트

  const [hoverState,setHover] = useState(false); //hover category btn state
  const [hoverNavUnListState,setHoverNavUnList]=useState(false); //hover category nav ul state

  const [categoryGiftState,setCategoryGift]=useState(false) //선물하기 상태
  const [categoryVegetableState,setCategoryVegetable]=useState(false)//채소
  const [categoryFruitState,setCategoryFruit]=useState(false)//과일
  const [categoryAquaticProductState,setCategoryAquaticProduct ]=useState(false) //수산 · 해산 · 건어물
  const [categoryMeatState,setCategoryMeat ]=useState(false) //정육 · 계란
  const [categorySoupState,setCategorySoup ]=useState(false) //국 · 반찬 · 메인요리
  const [categorySaladState,setCategorySalad ]=useState(false) //샐러드 · 간편식
  const [categorySeasoningState,setCategorySeasoning ]=useState(false) //면 · 양념 · 오일
  const [categoryDrinkState,setCategoryDrink ]=useState(false) //생수 · 음료 · 우유 · 커피
  const [categorySnackState,setCategorySnack ]=useState(false) //간식 · 과자 · 떡
  const [categoryBakeryState,setCategoryBakery ]=useState(false) //베이커리 · 치즈 · 델리
  const [categoryHealthFoodState,setCategoryHealthFood ]=useState(false) //건강식품
  const [categoryWineState,setCategoryWine ]=useState(false) //와인
  const [categoryTraditionalLiquorState,setCategoryTraditionalLiquor ]=useState(false) //전통주
  const [categoryHouseholdItemState,setCategoryHouseholdItem ]=useState(false) //생활용품 · 리빙 · 캠핑
  const [categorySkinCareState,setCategorySkinCare ]=useState(false) //스킨케어 · 메이크업
  const [categoryHairState,setCategoryHair ]=useState(false) //헤어 · 바디 · 구강
  const [categoryKitchenWareState,setCategoryKitchenWare ]=useState(false) //주방용품
  const [categoryElectronicProductState,setCategoryElectronicProduct ]=useState(false)//가전제품
  const [categoryPetState,setCategoryPet ]=useState(false) //반려동물
  const [categoryBabyState,setCategoryBaby ]=useState(false) //베이비 · 키즈 · 완구
  const [categoryTravelState,setCategoryTravel ]=useState(false) //여행 · 티켓 


  /* category hover 함수 */
  const handleMouseEnter = () =>{
    setHover(true) 
  }
  const handleMouseLeave=()=>{
    setHover(false)
  }
  /* category nav hover함수 */
  const handleMouseEnterNav=()=>{
    setHover(true) 
  }
  const handleMouseLeaveNav=()=>{
    setHover(false)
  }
  /* category nav ul hover함수 */
  const handleMouseEnterUnList=()=>{
    setHover(true) 
    setHoverNavUnList(true)
  }
  const handleMouseLeaveUnList=()=>{
    setHover(false)
    setHoverNavUnList(false)
  }

  useEffect(()=>{

    categoryRef.current.addEventListener('mouseenter', handleMouseEnter); 
    categoryRef.current.addEventListener('mouseleave', handleMouseLeave);

    categoryNavRef.current.addEventListener('mouseenter', handleMouseEnterNav); 
    categoryNavRef.current.addEventListener('mouseleave', handleMouseLeaveNav);

    categoryNavUnListRef.current.addEventListener('mouseenter', handleMouseEnterUnList); 
    categoryNavUnListRef.current.addEventListener('mouseleave', handleMouseLeaveUnList); 
    
    return()=>{
      categoryRef.current.removeEventListener('mouseenter', handleMouseEnter); 
      categoryRef.current.removeEventListener('mouseleave', handleMouseLeave);

      categoryNavRef.current.removeEventListener('mouseenter', handleMouseEnterNav);
      categoryNavRef.current.removeEventListener('mouseleave', handleMouseLeaveNav);

      categoryNavUnListRef.current.removeEventListener('mouseenter', handleMouseEnterUnList);
      categoryNavUnListRef.current.removeEventListener('mouseleave', handleMouseLeaveUnList);
    }
  })

  
  return(
    <>
      <button className={classes.header_category__btn} type='button' ref={categoryRef} >
        <img alt='category Icon' className={classes.header_category__btn_img} src={categoryIcon} />
        카테고리
      </button>

      <div className={classes.header_catecory__nav } ref={categoryNavRef} >

        <ul className={classes.header_catecory__nav__wrapper} hidden={!hoverState} ref={ categoryNavUnListRef} >
          
          <li onMouseEnter={()=>{setCategoryGift(true)}} onMouseLeave={()=>{setCategoryGift(false)}} >
            <img alt='' src= {categoryGiftIcon}/><a href='#!' > 선물하기</a>
          </li>
        
          <li onMouseEnter={()=>{setCategoryVegetable(true)}} onMouseLeave={()=>{setCategoryVegetable(false)}}  >
            <a href='#!'><img alt='' src= {categoryVegetable}/>  채소</a>
          </li>

          <li onMouseEnter={()=>{setCategoryFruit(true)}} onMouseLeave={()=>{setCategoryFruit(false)}} >
            <a href='#!'><img alt='' src= {categoryFruit}/> 과일 · 견과 · 쌀</a>
          </li> 
          
          <li onMouseEnter={()=>{setCategoryAquaticProduct(true)}} onMouseLeave={()=>{setCategoryAquaticProduct(false)}} >
            <a href='#!'><img alt='' src= {categoryAquaticProduct}/> 수산 · 해산 · 건어물</a></li>
          
          <li onMouseEnter={()=>{setCategoryMeat(true)}} onMouseLeave={()=>{setCategoryMeat(false)}}>
            <a href='#!'><img alt='' src= {categoryMeat}/> 정육 · 계란</a></li>
          
          <li onMouseEnter={()=>{setCategorySoup(true)}} onMouseLeave={()=>{setCategorySoup(false)}} >
            <a href='#!'><img alt='' src= {categorySoup}/> 국 · 반찬 · 메인요리</a></li>
          
          <li onMouseEnter={()=>{setCategorySalad(true)}} onMouseLeave={()=>{setCategorySalad(false)}} >
            <a href='#!'><img alt='' src= {categorySalad}/> 샐러드 · 간편식</a></li>
          
          <li onMouseEnter={()=>{setCategorySeasoning(true)}} onMouseLeave={()=>{setCategorySeasoning(false)}} >
            <a href='#!'><img alt='' src= {categorySeasoning}/> 면 · 양념 · 오일</a></li>
          
          <li onMouseEnter={()=>{setCategoryDrink(true)}} onMouseLeave={()=>{setCategoryDrink(false)}} >
            <a href='#!'><img alt='' src= {categoryDrink}/> 생수 · 음료 · 우유 · 커피</a></li>
          
          <li onMouseEnter={()=>{setCategorySnack(true)}} onMouseLeave={()=>{setCategorySnack(false)}} >
            <a href='#!'><img alt='' src= {categorySnack}/> 간식 · 과자 · 떡</a></li>
          
          <li onMouseEnter={()=>{setCategoryBakery(true)}} onMouseLeave={()=>{setCategoryBakery(false)}} >
            <a href='#!'><img alt='' src= {categoryBakery}/> 베이커리 · 치즈 · 델리</a></li>
          
          <li onMouseEnter={()=>{setCategoryHealthFood(true)}} onMouseLeave={()=>{setCategoryHealthFood(false)}} >
            <a href='#!'><img alt='' src= {categoryHealthFood}/> 건강식품</a></li>
          
          <li onMouseEnter={()=>{setCategoryWine(true)}} onMouseLeave={()=>{setCategoryWine(false)}} >
            <a href='#!'><img alt='' src= {categoryWine}/> 와인</a></li>
          
          <li onMouseEnter={()=>{setCategoryTraditionalLiquor(true)}} onMouseLeave={()=>{setCategoryTraditionalLiquor(false)}} >
            <a href='#!'><img alt='' src= {categoryTraditionalLiquor}/> 전통주</a></li>
          
          <li onMouseEnter={()=>{setCategoryHouseholdItem(true)}} onMouseLeave={()=>{setCategoryHouseholdItem(false)}} >
            <a href='#!'><img alt='' src= {categoryHouseholdItem}/> 생활용품 · 리빙 · 캠핑</a></li>
          
          <li onMouseEnter={()=>{setCategorySkinCare(true)}} onMouseLeave={()=>{setCategorySkinCare(false)}} >
            <a href='#!'><img alt='' src= {categorySkinCare}/> 스킨케어 · 메이크업</a></li>
          
          <li onMouseEnter={()=>{setCategoryHair(true)}} onMouseLeave={()=>{setCategoryHair(false)}}>
            <a href='#!'><img alt='' src= {categoryHair}/> 헤어 · 바디 · 구강</a></li>
          
          <li onMouseEnter={()=>{setCategoryKitchenWare(true)}} onMouseLeave={()=>{setCategoryKitchenWare(false)}} >
            <a href='#!'><img alt='' src= {categoryKitchenWare}/> 주방용품</a></li>
          
          <li onMouseEnter={()=>{setCategoryElectronicProduct(true)}} onMouseLeave={()=>{setCategoryElectronicProduct(false)}} >
            <a href='#!'><img alt='' src= {categoryElectronicProduct}/>가전제품</a></li>
          
          <li onMouseEnter={()=>{setCategoryPet(true)}} onMouseLeave={()=>{setCategoryPet(false)}} >
            <a href='#!'><img alt='' src= {categoryPet}/> 반려동물</a></li>
          
          <li onMouseEnter={()=>{setCategoryBaby(true)}} onMouseLeave={()=>{setCategoryBaby(false)}} >
            <a href='#!'><img alt='' src= {categoryBaby}/> 베이비 · 키즈 · 완구</a></li>
          
          <li onMouseEnter={()=>{setCategoryTraditionalLiquor(true)}} onMouseLeave={()=>{setCategoryTraditionalLiquor(false)}} >
            <a href='#!'><img alt='' src= {categoryTravel}/> 여행 · 티켓</a></li>
          
        </ul>

      </div>
      <HeaderCategorySideNav 
      handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} 
      hoverState={hoverState} setHover={setHover} hoverNavUnListState={hoverNavUnListState} setHoverNavUnList={setHoverNavUnList}
      categoryGiftState={categoryGiftState} setCategoryGift={setCategoryGift} 
      categoryVegetableState={categoryVegetableState} setCategoryVegetable={setCategoryVegetable}
      categoryFruitState={categoryFruitState} setCategoryFruit={setCategoryFruit}
      categoryAquaticProductState={categoryAquaticProductState} setCategoryAquaticProduct={setCategoryAquaticProduct}
      categoryMeatState={categoryMeatState} setCategoryMeat={setCategoryMeat}
      categorySoupState={categorySoupState} setCategorySoup={setCategorySoup}
      categorySaladState={categorySaladState} setCategorySalad={setCategorySalad}
      categorySeasoningState={categorySeasoningState} setCategorySeasoning={setCategorySeasoning}
      categoryDrinkState={categoryDrinkState} setCategoryDrink={setCategoryDrink}
      categorySnackState={categorySnackState} setCategorySnack={setCategorySnack}
      categoryBakeryState={categoryBakeryState} setCategoryBakery={setCategoryBakery}
      categoryHealthFoodState={categoryHealthFoodState} setCategoryHealthFood={setCategoryHealthFood}
      categoryWineState={categoryWineState} setCategoryWine={setCategoryWine}
      categoryTraditionalLiquorState={categoryTraditionalLiquorState} setCategoryTraditionalLiquor={setCategoryTraditionalLiquor}
      categoryHouseholdItemState={categoryHouseholdItemState} setCategoryHouseholdItem={setCategoryHouseholdItem}
      categorySkinCareState={categorySkinCareState} setCategorySkinCare={setCategorySkinCare}
      categoryHairState={categoryHairState} setCategoryHair={setCategoryHair}
      categoryKitchenWareState={categoryKitchenWareState} setCategoryKitchenWare={setCategoryKitchenWare}
      categoryElectronicProductState={categoryElectronicProductState} setCategoryElectronicProduct={setCategoryElectronicProduct}
      categoryPetState={categoryPetState} setCategoryPet={setCategoryPet}
      categoryBabyState={categoryBabyState} setCategoryBaby={setCategoryBaby}
      categoryTravelState={categoryTravelState} setCategoryTravel={setCategoryTravel}
      />
    </>
  );
}

export default HeaderCategory;