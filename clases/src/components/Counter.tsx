import { useState } from 'react';
import toast from 'react-hot-toast';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => ++count);
    toast.success(count.toString());
  };

  const decreaseCount = () => {
    setCount((count) => --count);
    toast.error(count.toString());
  };

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <button className="btn" onClick={increaseCount}>
        +
      </button>
      {count}
      <button className="btn" onClick={decreaseCount}>
        -
      </button>
    </div>
  );
};

export default Counter;
