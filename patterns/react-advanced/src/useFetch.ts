import { useEffect, useState } from 'react';

const useFetch = ({ url }: { url: string }) => {
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

  return { data, isLoading, error };
};

export default useFetch;
