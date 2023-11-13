const Clock = () => {
  let now = new Date().toLocaleTimeString();

  const tick = () => {
    return new Date().toLocaleTimeString();
  };
  console.log(tick());

  return (
    <div className="container">
      <span className="clock">{tick()}</span>
    </div>
  );
};

export default Clock;
