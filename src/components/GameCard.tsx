import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatfromIconList from './PlatfromIconList'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image || '')} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatfromIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='lg'>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard