import ProductCard from '@/components/ProductCard/ProductCard';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import classes from './ProductCarousel.module.scss';
import './ProductCarousel.scss';
import { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore';
import loadSwiperSlider from '@/utils/swiper-utils/loadSwiperSlider';

export default function ProductCarousel(props) {
  const { title } = props;
  const style = {
    width: '1050px',
    margin: '0 auto',
    position: 'relative',
  };

  const { readData, data = null, error: readError } = useReadData(`products`);
  useEffect(() => {
    readData();
  }, []);

  if (!data) {
    // console.log('currentProduct', currentProduct);
  } else {
    const swiperSliderContensArray = loadSwiperSlider(data, ProductCard);
    // console.log('swiperSliderContensArray', swiperSliderContensArray);
    return (
      <section className={'ProductCarousel'}>
        {title ? <h3 className={classes.ProductCarouselTitle}>{title}</h3> : ``}
        <CustomSwiper
          customStyle={style}
          nextBtnClass={`${classes.horizontalSwiperNavigation} ${classes.horizontalSwiperNavigationNext}`}
          prevBtnClass={`${classes.horizontalSwiperNavigation} ${classes.horizontalSwiperNavigationPrev}`}
          swiperSliderContensArray={swiperSliderContensArray}
        />
      </section>
    );
  }
}
