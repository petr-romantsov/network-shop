import { API_BASE_URL } from '@/core/constants';
import { EndpointMap, Endpoints } from '@/core/types/api';

export const fetchData = async <TPath extends Endpoints>(
  path: TPath
): Promise<EndpointMap[TPath]> => {
  const response = await fetch(`${API_BASE_URL}/${path}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
