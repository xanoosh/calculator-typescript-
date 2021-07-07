import React from 'react';

interface Props {
  val: string;
  click: any;
  isNumber?: boolean;
  isClicked?: boolean;
}

const Button: React.FC<Props> = ({
  val,
  click,
  isNumber = false,
  isClicked = false,
}) => {
  return (
    <button onClick={click} className={isNumber && isClicked ? 'inactive' : ''}>
      {val}
    </button>
  );
};

export default Button;
