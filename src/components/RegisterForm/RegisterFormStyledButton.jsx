import classes from './RegisterFormStyledButton.module.scss';

export default function RegisterFormStyledButton(props) {
  const { handleOnClick = null, innerText = '' } = props;

  const customStyle = { width: '100%', height: '44px', ...props.customStyle };

  return (
    <button
      className={classes.RegisterFormStyledButton}
      style={customStyle}
      type="button"
      onClick={handleOnClick}
    >
      {innerText}
    </button>
  );
}
