import CustomSwiper from '../CustomSwiper/CustomSwiper';
import classes from './ProductCarousel.module.scss';
import './ProductCarousel.scss';

export default function ProductCarousel(props) {
  const { title } = props;
  const style = {
    width: '1050px',
    margin: '0 auto',
    position: 'relative',
  };
  return (
    <section className={'ProductCarousel'}>
      {title ? <h3 className={classes.ProductCarouselTitle}>{title}</h3> : ``}
      <CustomSwiper
        customStyle={style}
        nextBtnClass={`${classes.horizontalSwiperNavigation} ${classes.horizontalSwiperNavigationNext}`}
        prevBtnClass={`${classes.horizontalSwiperNavigation} ${classes.horizontalSwiperNavigationPrev}`}
      />
    </section>
  );
}
