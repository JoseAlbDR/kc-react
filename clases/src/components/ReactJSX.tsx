const ReactJSX = () => {
  const className = 'container';
  const hello = 'Hello there';

  return (
    <div className={className}>
      <h1>{hello}</h1>

      <div>{5 + 5}</div>
      <div>{`${hello} David`}</div>
    </div>
  );
};

export default ReactJSX;
