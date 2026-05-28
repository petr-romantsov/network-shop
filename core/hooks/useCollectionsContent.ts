'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchData } from '@/core/api/fetchData';

const COLLECTIONS_ENDPOINT = 'collections';

const fetchCollections = () => fetchData(COLLECTIONS_ENDPOINT);

export const useCollectionsContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [COLLECTIONS_ENDPOINT],
    queryFn: fetchCollections,
  });

  return { data, isLoading, error };
};
