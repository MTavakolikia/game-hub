import useData from './useData';
import { Genre } from './useGenres';

export interface Platfrom {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image?: string;
    parent_platforms?: { platform: Platfrom }[];
    metacritic?: number;
}


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platfrom | null) => useData<Game>('/games', {
    params: {
        genres: selectedGenre?.id,
        platfroms: selectedPlatform?.id
    }
}, [selectedGenre?.id, selectedPlatform?.id]);
export default useGames