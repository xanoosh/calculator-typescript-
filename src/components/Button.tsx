interface Props {
  val: string;
  click: any;
  isNotNumber?: boolean;
  isClicked?: boolean;
}

const Button: React.FC<Props> = ({
  val,
  click,
  isNotNumber = false,
  isClicked = false,
}) => {
  return (
    <button
      onClick={click}
      className={isNotNumber && isClicked ? 'inactive' : ''}
    >
      {val}
    </button>
  );
};

export default Button;
