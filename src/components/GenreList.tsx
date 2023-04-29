import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
    const { genres } = useGenres();
    return (
        <List spacing={3}>
            {genres.map(genre =>
                <HStack>
                    <Image
                        borderRadius='1'
                        src={getCroppedImageUrl(genre.image_background)}
                        alt='Dan Abramov'
                    />
                    <ListItem key={genre.id}>{genre.name}</ListItem>
                </HStack>


            )}
        </List>
    )
}

export default GenreList