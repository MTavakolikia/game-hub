import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/gameHubLogo.webp';

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='80px'></Image>
            <Text>Hiiiiiiiii</Text>
        </HStack>
    )
}

export default NavBar