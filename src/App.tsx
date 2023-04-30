import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Game } from "./hooks/useGames"
import PlatfromSelector from "./components/PlatfromSelector"
import { Platfrom } from './hooks/usePlatforms'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Game | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platfrom | null>(null);
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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <PlatfromSelector selectedPlatfrom={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>

  )
}

export default App
