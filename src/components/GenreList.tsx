import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre, useGenres } from "../hooks/useGenres";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
                    <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} fontSize='lg' onClick={() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
                </HStack>


            )}
        </List>
    )
}

export default GenreList