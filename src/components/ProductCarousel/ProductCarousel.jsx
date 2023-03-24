import ProductCard from '@/components/ProductCard/ProductCard';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import classes from './ProductCarousel.module.scss';
import './ProductCarousel.scss';
import { useRecoilState } from 'recoil';
import { currentProductState } from '@/@atom/currentProductState';
import { useEffect, useState } from 'react';
import { useReadData } from '@/firebase/firestore';
import { SwiperSlide } from 'swiper/react';

export default function ProductCarousel(props) {
  const { title } = props;
  const style = {
    width: '1050px',
    margin: '0 auto',
    position: 'relative',
  };

  const [currentProduct, setCurrentProduct] =
    useRecoilState(currentProductState);

  const { readData, data = null, error: readError } = useReadData(`products`);
  useEffect(() => {
    readData();
    if (data) setCurrentProduct(data[1]);
  }, []);

  if (!data) {
    // console.log(JSON.stringify(data[0]));
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
        >
          {/* <ProductCard productData={data[0]} /> */}
        </CustomSwiper>
      </section>
    );
  }
}

function loadSwiperSlider(contentsArray, SwiperContentElem) {
  let sliders = [];
  if (contentsArray) {
    /* todo --------------------------------------------------------------------- */
    // contentsArray 내용으로 sliders 채워야함
    contentsArray.forEach((content) => {
      sliders.push(
        <SwiperSlide key={content.key}>
          <SwiperContentElem content={content} />
        </SwiperSlide>
      );
    });
    //
  } else {
    // warning about empty arr
  }

  return sliders;
}
