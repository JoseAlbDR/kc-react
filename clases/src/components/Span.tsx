const Span = ({
  className,
  children,
}: {
  className: string;
  children: string;
}) => {
  return <span className={className}>{children}</span>;
};

export default Span;
