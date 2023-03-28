import CustomSwiper from '../CustomSwiper/CustomSwiper';
import classes from './MainBannerCarousel.module.scss';
import './MainBannerCarousel.scss';
import { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore';
import loadSwiperSlider from '@/utils/swiper-utils/loadSwiperSlider';
import MainBannerCard from './MainBannerCard';
export default function MainBannerCarousel(props) {
  const { title } = props;
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: { delay: 3500, disableOnInteraction: true },
  };
  const imgLoc = '../../../public/img/MainBanner/swiperBanner';
  const bannerImgList = [imgLoc + '1.jpg', imgLoc + '2.jpg', imgLoc + '3.jpg'];

  const swiperSliderContensArray = loadSwiperSlider(
    bannerImgList,
    MainBannerCard
  );
  // console.log('swiperSliderContensArray', swiperSliderContensArray);
  return (
    <section className={'MainBannerCarousel'}>
      <CustomSwiper
        nextBtnClass={`${classes.horizontalSwiperNavigation} ${classes.horizontalSwiperNavigationNext}`}
        prevBtnClass={`${classes.horizontalSwiperNavigation} ${classes.horizontalSwiperNavigationPrev}`}
        swiperParams={swiperParams}
        swiperSliderContensArray={swiperSliderContensArray}
      />
    </section>
  );
}
