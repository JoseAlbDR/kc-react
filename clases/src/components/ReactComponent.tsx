const message = (props: { className?: string; text: string }) => {
  return <span>{props.text}</span>;
};

const ReactComponent = () => {
  return (
    <div className="container">
      {message({ text: 'Hello, Keepcoding', className: 'hello' })}
      {message({ text: 'Goodbye, KeepCoding' })}
    </div>
  );
};

export default ReactComponent;
