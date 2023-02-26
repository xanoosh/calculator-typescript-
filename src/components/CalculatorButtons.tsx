import Button from './Button';

interface Props {
  btnList: Array<any>;
  calculationEvent: any;
  resultEvent: any;
}

const CalculatorButtons: React.FC<Props> = ({
  btnList,
  calculationEvent,
  resultEvent,
}) => {
  const buttons = btnList.map((btn, i) => (
    <Button
      key={i}
      val={btn.val}
      click={btn.val === '=' ? resultEvent : calculationEvent}
    />
  ));
  return <div className="board">{buttons}</div>;
};

export default CalculatorButtons;
