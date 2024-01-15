import { ReactNode, useEffect, useState } from 'react';

const Fetch = <T extends unknown>({
  name,
  url,
  children,
}: {
  name: string;
  url: string;
  children: (data: Array<T>) => ReactNode;
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching teams');
        const { data } = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
        if (error instanceof Error) setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

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
