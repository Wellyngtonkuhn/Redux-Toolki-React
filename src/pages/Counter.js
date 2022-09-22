import { useSelector, useDispatch } from "react-redux";
import { diminuir, resetar, somar } from "../redux/slices/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.counter);

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>{number}</h1>
        <div style={{ display:'flex', gap: '.3rem'}} >
        <button onClick={() => dispatch(diminuir())}>-</button>
        <button onClick={() => dispatch(somar())}>+</button>
        <button onClick={() => dispatch(resetar())}>Resetar</button>
        </div>
      </div>
    </>
  );
}
