import React from 'react';

interface Props {
  val: string;
  isNumber?: boolean;
  isClicked?: boolean;
}

const Button: React.FC<Props> = ({
  val,
  isNumber = false,
  isClicked = false,
}) => {
  return (
    <button className={isNumber && isClicked ? 'inactive' : ''}>{val}</button>
  );
};

export default Button;
