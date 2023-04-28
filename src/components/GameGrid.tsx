import useGames from '../hooks/useGames';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <>
            <ul>
                {games.map(game => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
            <Text>{error}</Text>
        </>
    )
}

export default GameGrid