import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/gameHubLogo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding='10px' justifyContent={"space-between"}>
            <Image mx={30} src={logo} boxSize='60px' backgroundColor={"#1A202C"} borderRadius={'lg'} px={1} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar