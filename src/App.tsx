import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import PlatfromSelector from "./components/PlatfromSelector"
import { Platfrom } from './hooks/usePlatforms'
import { Genre } from "./hooks/useGenres"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genre | null;
  platform: Platfrom | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);
  return (

    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area={'aside'}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box margin={5}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatfromSelector selectedPlatfrom={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
            </Box>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>

    </Grid>

  )
}

export default App
