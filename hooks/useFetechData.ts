import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const accessToken = useUserStore((state) => state.accessToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers: HeadersInit = {};

        if (accessToken) {
          headers['Authorization'] = `Bearer ${accessToken}`;
        }

        const response = await fetch(url, { headers });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: T = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, accessToken]);

  return { data, isLoading, error };
};

export default useFetchData;
