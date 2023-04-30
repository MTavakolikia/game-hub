
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Reease date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]
    const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((sort) => <MenuItem key={sort.label} onClick={() => onSelectSortOrder(sort.value)} >{sort.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector