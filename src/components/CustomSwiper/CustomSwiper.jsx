import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './CustomSwiper.module.scss';
import 'swiper/css/navigation';
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import ProductCard from '../ProductCard/ProductCard';
import { useCallback, useEffect, useRef } from 'react';

export default function CustomSwiper(props) {
  const sliderRef = useRef(null);
  const {
    isVertical = false,
    hasPagination = false,
    insideTitle = null,
    prevBtnClass = null,
    nextBtnClass = null,
    customStyle = null,
    swiperSliderContensArray = [],
  } = props;

  const swiperParams = {
    ref: sliderRef,
    modules: [Navigation, A11y],
    scrollbar: { draggable: true },
    slidesPerView: 4,
    spaceBetween: 18,
    onSlideChange: () => {
      // console.log('slide change')
    },
    onReachEnd: () => {
      console.log('end');
    },
    onReachBeginning: () => {
      console.log('begin');
    },
    onSwiper: (swiper) => {
      // console.log(swiper)
    },
    direction: 'horizontal',
    ...props.swiperParams,
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  // console.log('아이', children.type);
  // console.log('아이', children.props.productData);
  return (
    <div className={'CustomSwiper'} style={customStyle}>
      {prevBtnClass ? (
        <button className={prevBtnClass} type="button" onClick={handlePrev} />
      ) : null}

      {insideTitle ? (
        <span className="CustomSwiperInsideTitle">{insideTitle}</span>
      ) : null}

      <Swiper {...swiperParams}>
        {swiperSliderContensArray.map((slider) => {
          return slider;
        })}
      </Swiper>

      {nextBtnClass ? (
        <button className={nextBtnClass} type="button" onClick={handleNext} />
      ) : null}
    </div>
  );
}
