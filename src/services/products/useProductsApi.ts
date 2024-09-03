import { useCallback, useEffect, useState } from 'react';
import { Product } from './types';

interface UseProductsApiProps {
  search?: string;
}
const useProductsApi = ({ search }: UseProductsApiProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products${'?search=' + search}`);
    if (!response.ok) {
      setError(response.statusText);
      setIsLoading(false);
      return;
    }
    const newData = await response.json();
    setData(newData);
    setIsLoading(false);
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [search]);

  return {
    isLoading,
    data,
    error,
  };
};

export default useProductsApi;
