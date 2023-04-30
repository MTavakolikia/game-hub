import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Game } from "./hooks/useGames"
import PlatfromSelector from "./components/PlatfromSelector"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Game | null>(null);

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
        <PlatfromSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>

  )
}

export default App
