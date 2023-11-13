import { useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(tick, 1000);

  return (
    <div className="container">
      <span className="clock">{time}</span>
    </div>
  );
};

export default Clock;
