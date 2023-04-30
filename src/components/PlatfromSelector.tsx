import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platfrom } from '../hooks/usePlatforms'

interface Props {
    onSelectedPlatform: (platform: Platfrom) => void;
    selectedPlatfrom: Platfrom | null;
}

const PlatfromSelector = ({ onSelectedPlatform, selectedPlatfrom }: Props) => {
    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatfrom?.name || 'Platfrom'}
            </MenuButton>
            <MenuList>
                {data.map((platfrom) => <MenuItem key={platfrom.id} onClick={() => onSelectedPlatform(platfrom)
                }>{platfrom.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatfromSelector