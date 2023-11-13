import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => ++count);
  };

  const decreaseCount = () => {
    setCount((count) => --count);
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
