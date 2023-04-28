

import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}  >
                {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
            <Text>{error}</Text>
        </>
    )
}

export default GameGrid