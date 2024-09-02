import { Product } from '@types';
import { useCallback, useEffect, useState } from 'react';

interface UseProductsApiProps {
  search?: string;
}
const useProductsApi = ({ search }: UseProductsApiProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`https://products.dummy.api/products${'?search=' + search}`);
    if (!response.ok) {
      setError(response.statusText);
      setIsLoading(false);
      return;
    }
    const newData = await response.json();
    setData(newData);
    setIsLoading(false);
    setIsSuccess(true);
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [search]);

  return {
    isLoading,
    data,
    error,
    isSuccess,
  };
};

export default useProductsApi;
