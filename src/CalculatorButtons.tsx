import Button from './Button';

interface Props {
  btnList: Array<object>;
  calculationEvent: any;
  resultEvent: any;
}

const CalculatorButtons: React.FC<Props> = ({
  btnList,
  calculationEvent,
  resultEvent,
}) => {
  const buttons = btnList.map((btn) => (
    <Button
      val={btn.val}
      click={typeof btn.val === 'number' ? calculationEvent : resultEvent}
    />
  ));
  return <div className="board">{buttons}</div>;
};

export default CalculatorButtons;
