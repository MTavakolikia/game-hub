import useData from './useData';

export interface Genre {
    id: number;
    name: string;
    image_background?: string | any;
}

export const useGenres = () => useData<Genre>('/genres');