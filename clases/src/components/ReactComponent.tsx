import Span from './Span';

const Message = ({ className, text }: { className?: string; text: string }) => {
  return <span>{text}</span>;
};

const ReactComponent = () => {
  return (
    <div className="container">
      <Message text="Hello, Keepcoding" className="hello"></Message>
      <hr />
      <Span className="goodbye">Goodbye Keepcoding</Span>
    </div>
  );
};

export default ReactComponent;
