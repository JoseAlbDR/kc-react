import { ReactNode, useEffect, useState } from 'react';
import useFetch from './useFetch';

const Fetch = <T extends unknown>({
  name,
  url,
  children,
}: {
  name: string;
  url: string;
  children: (data: Array<T>) => ReactNode;
}) => {
  const { data, isLoading, error } = useFetch({ url });

  return (
    <div>
      <h2>{name}</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div>Opps, there was an error!!!</div>}
      {!isLoading && !error && children(data)}
    </div>
  );
};

export default Fetch;
