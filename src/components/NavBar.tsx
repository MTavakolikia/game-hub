import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/gameHubLogo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={logo} boxSize='80px'></Image>
            <Text>Hiiiiiiiii</Text>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar