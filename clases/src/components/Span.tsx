const Span = ({
  className,
  children,
  text,
}: {
  text?: string;
  className: string;
  children: string;
}) => {
  return <span className={className}>{children}</span>;
};

export default Span;
