import { useCallback, useEffect, useRef, useState } from 'react';
import { stickAgainstRelatedElement } from '@/utils/stick_element_to_another_elem/wearStickyEffect';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import classes from './RecentProductCarousel.module.scss';
import './RecentProductCarousel.scss';
import loadSwiperSlider from '@/utils/swiper-utils/loadSwiperSlider';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useRecoilValue } from 'recoil';
import { currentProductState } from '@/@atom/currentProductState';

export default function RecentProductCarousel(props) {
  const { title } = props;
  const [isSticky, setIsSticky] = useState(false);
  const [recentProductsList, setRecentProductsList] = useState([]);
  const currentProductObject = useRecoilValue(currentProductState);

  function pushRecentProductsList(recentProduct) {
    if (recentProductsList.length >= 5) {
      recentProductsList.pop();
    }
    let isPushed = false;
    recentProductsList.forEach((product) => {
      if (product.id == recentProduct.id) isPushed = true;
    });
    if (isPushed) {
      return;
    }
    recentProductsList.unshift(recentProduct);
    setRecentProductsList(recentProductsList);
  }

  const ref = useRef(null);

  const swiperParams = {
    slidesPerView: 2.5,
    spaceBetween: 4,
    direction: 'vertical',
  };

  useEffect(() => {
    // console.log(getRelativeTop(recentProductCarouselRef));
    // console.log(getRelativeTop(document.body));

    if (currentProductObject != null) {
      stickAgainstRelatedElement(
        ref.current,
        document.querySelector('.MainBannerCarousel'),
        null,
        true,
        237
      );
    }
  }, [currentProductObject]);

  const swiperSliderContensArray = loadSwiperSlider(
    recentProductsList,
    ProductCard
  );

  if (currentProductObject != null) {
    pushRecentProductsList(currentProductObject);
  }

  if (recentProductsList.length > 0) {
    return (
      // <section ref={ref} className={classes.RecentProductCarousel}>
      <section ref={ref} className={'RecentProductCarousel'}>
        <CustomSwiper
          insideTitle={title ? title : null}
          nextBtnClass={`${classes.verticalSwiperNavigation} ${classes.verticalSwiperNavigationNext}`}
          prevBtnClass={`${classes.verticalSwiperNavigation} ${classes.verticalSwiperNavigationPrev}`}
          swiperParams={swiperParams}
          swiperSliderContensArray={swiperSliderContensArray}
        />
      </section>
    );
  }
}

// function vanishRecentProductWhenCrushed() {
//   if (getRelativeLeft(recentProduct) < 1194) {
//     recentProduct.classList.add('a11y-hidden');
//   } else {
//     recentProduct.classList.remove('a11y-hidden');
//   }
// }

// window.addEventListener('scroll', () => {
//   keepYOfRecentProduct();
// });

// window.onload = function () {
//   keepYOfRecentProduct();
//   vanishRecentProductWhenCrushed();
// };

// window.addEventListener(`resize`, function () {
//   // console.log(getRelativeLeft(prdw));
//   vanishRecentProductWhenCrushed();
// });
