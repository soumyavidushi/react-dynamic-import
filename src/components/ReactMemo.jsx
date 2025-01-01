import { memo, useState } from "react";

const Counter = memo(({ count }) => {
  console.log('Counter render');
  return <p>{count}</p>;
});

const Memo = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
        <Counter count={count} />
        </div>
    );
}

export default Memo;