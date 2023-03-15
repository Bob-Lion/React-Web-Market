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
  } = props;

  const swiperParams = {
    ref: sliderRef,
    modules: [Navigation, A11y],
    scrollbar: { draggable: true },
    slidesPerView: 4,
    spaceBetween: 18,
    onSlideChange: () => console.log('slide change'),
    onSwiper: (swiper) => console.log(swiper),
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

  return (
    <div className={classes.CustomSwiper} style={customStyle}>
      {prevBtnClass ? (
        <button className={prevBtnClass} type="button" onClick={handlePrev} />
      ) : null}

      <Swiper {...swiperParams}>
        {loadSwiperSlider(tempContentsArray).map((slider) => {
          return slider;
        })}
      </Swiper>

      {nextBtnClass ? (
        <button className={nextBtnClass} type="button" onClick={handleNext} />
      ) : null}
    </div>
  );
}

const tempContentsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function loadSwiperSlider(contentsArray) {
  let sliders = [];
  if (contentsArray) {
    /* todo --------------------------------------------------------------------- */
    // contentsArray 내용으로 sliders 채워야함
    contentsArray.forEach((o, i) => {
      sliders.push(
        <SwiperSlide key={i}>
          {i + 1}
          <ProductCard />
        </SwiperSlide>
      );
    });
    //
  } else {
    // warning about empty arr
  }

  return sliders;
}
