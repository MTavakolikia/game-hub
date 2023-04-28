import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatfromIconList from './PlatfromIconList';
interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <CardBody>
                <Image
                    src={game.background_image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{game.name}</Heading>

                    <PlatfromIconList platforms={game.parent_platforms.map(m => m.platform)} />

                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default GameCard