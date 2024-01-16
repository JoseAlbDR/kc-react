import { ReactNode } from 'react';

const FlatList = <T extends unknown>({
  data,
  renderItem,
}: {
  data: T[];
  renderItem: (data: T, index: number) => ReactNode;
}) => {
  return (
    <ul className="flex flex-col gap-5 list-none font-semibold text-xl">
      {data.map(renderItem)}
    </ul>
  );
};

export default FlatList;
