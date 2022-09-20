import { useSelector, useDispatch } from "react-redux"
import { somar, diminuir, resetar } from "../../redux/slices/counterSlice"



export default function Counter() {
    const dispatch = useDispatch()
    const {number} = useSelector(state => state.counter)
    console.log(number)
  return (
    <>
        <div>
            <h1>{number}</h1>
            <button onClick={()=>dispatch(diminuir())}>-</button>
            <span>       </span>
            <button onClick={()=>dispatch(somar())}>+</button>
            <span>       </span>
            <button onClick={()=>dispatch(resetar())}>Resetar</button>
        </div>
    </>
    )
}
