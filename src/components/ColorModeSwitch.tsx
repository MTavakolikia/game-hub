import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack padding='10px'>
            <Text whiteSpace='nowrap'>Dark Mode</Text>
            <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        </HStack>
    )
}

export default ColorModeSwitch

