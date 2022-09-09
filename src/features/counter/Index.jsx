import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import StyleSheet from  './Counter.module.css'

export const Index = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState("2");

  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button
          className={StyleSheet.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={StyleSheet.textbox} style={{ padding: "0px 10px" }}>
          {count}
        </span>
        <button
          className={StyleSheet.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Index;
