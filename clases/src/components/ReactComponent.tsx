import Clock from './Clock';
import Span from './Span';

const Message = ({
  className,
  children,
}: {
  className: string;
  children: string;
}) => {
  return <span className={className}>{children}</span>;
};

const ReactComponent = () => {
  return (
    <div className="container">
      <Message className="hello">Hello, Keepcoding</Message>
      <hr />
      <Span className="goodbye">Goodbye Keepcoding</Span>
      <Clock />
    </div>
  );
};

export default ReactComponent;
