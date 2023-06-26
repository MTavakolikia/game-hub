import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/gameHubLogo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={logo} boxSize='80px' rounded={'full'}></Image>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar