import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre, useGenres } from "../hooks/useGenres";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();
    return (
        <List spacing={3} paddingX={2}>
            {isLoading && <Spinner />}
            {data.map(genre =>
                <HStack key={genre.id}>
                    <Image
                        borderRadius={8}
                        boxSize='32px'
                        src={getCroppedImageUrl(genre.image_background)}
                    />
                    <Button fontSize='lg' onClick={() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
                </HStack>


            )}
        </List>
    )
}

export default GenreList