import Button from "./Button";
const CalcFrame = ({ addVal, addOp, Res }) => {
  return (
    <div>
      <div>
        <Button text="7" onClick={addVal} color="grey" value={7} />
        <Button text="8" onClick={addVal} color="grey" value={8} />
        <Button text="9" onClick={addVal} color="grey" value={9} />
        <Button text="+" onClick={addOp} color="grey" value="+" />
      </div>
      <div>
        <Button text="4" onClick={addVal} color="grey" value={4} />
        <Button text="5" onClick={addVal} color="grey" value={5} />
        <Button text="6" onClick={addVal} color="grey" value={6} />
        <Button text="-" onClick={addOp} color="grey" value="-" />
      </div>
      <div>
        <Button text="1" onClick={addVal} color="grey" value={1} />
        <Button text="2" onClick={addVal} color="grey" value={2} />
        <Button text="3" onClick={addVal} color="grey" value={3} />
        <Button text="*" onClick={addOp} color="grey" value="*" />
      </div>
      <div>
        <Button text="0" onClick={addVal} color="grey" value={0} />
        <Button text="." onClick={addVal} color="grey" value="." />
        <Button text="=" onClick={Res} color="grey" value="=" />
        <Button text="/" onClick={addOp} color="grey" value="/" />
      </div>
    </div>
  );
};

export default CalcFrame;
