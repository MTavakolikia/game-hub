import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { Platfrom } from '../hooks/usePlatforms'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platfrom | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} mt={3}  >
                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>)}
                {data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
            <Text>{error}</Text>
        </>
    )
}

export default GameGrid