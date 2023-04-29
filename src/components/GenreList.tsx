import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { useGenres } from "../hooks/useGenres";


const GenreList = () => {
    const { data } = useGenres();
    return (
        <List spacing={3} paddingX={2}>
            {data.map(genre =>
                <HStack key={genre.id}>
                    <Image
                        borderRadius={8}
                        boxSize='32px'
                        src={getCroppedImageUrl(genre.image_background)}
                    />
                    <ListItem fontSize='lg' >{genre.name}</ListItem>
                </HStack>


            )}
        </List>
    )
}

export default GenreList