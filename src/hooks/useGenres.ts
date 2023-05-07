import apiClient, { FetchResponse } from '../services/api-client';
import { useQuery } from '@tanstack/react-query'
export interface Genre {
    id: number;
    name: string;
    image_background?: string | any;
}

export const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
})