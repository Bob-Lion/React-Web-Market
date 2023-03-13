import classes from './ProductCard.module.scss';

export default function ProductCard(props) {
  return (
    <div className={classes.ProductCard}>
      <div className={classes.imgWrapper}></div>
    </div>
  );
}
