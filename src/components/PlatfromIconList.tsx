import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platfrom } from '../hooks/useGames';
import {
    FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platfrom[];
}

const PlatfromIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
        apple: FaApple
    }
    return (
        <>
            <HStack marginY={1}>
                {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>)}
            </HStack>
        </>
    )
}

export default PlatfromIconList