import classes from './MainBannerCard.module.scss';

export default function MainBannerCard(props) {
  const { content: imgUrl } = props;
  return (
    <div className={classes.MainBannerCard}>
      <img alt="" className={classes.mainImg} src={imgUrl} />
    </div>
  );
}
