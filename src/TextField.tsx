import React from 'react';

interface Props {
  text: string;
}

const TextField: React.FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};

export default TextField;
