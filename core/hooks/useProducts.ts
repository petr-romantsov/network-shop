import { useQuery } from '@tanstack/react-query';

import { fetchData } from '@/core/api/fetchData';

const PRODUCTS_ENDPOINT = 'products';

const fetchProducts = () => fetchData(PRODUCTS_ENDPOINT);

export const useProducts = () => {
  return useQuery({
    queryKey: [PRODUCTS_ENDPOINT],
    queryFn: fetchProducts,
  });
};
