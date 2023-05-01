import { Button, HStack, Heading, Image, List, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre, useGenres } from "../hooks/useGenres";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();
    return (
        <>
            <Heading font-size='2xl' marginBottom={3}>Genre</Heading>
            <List spacing={3} paddingX={2}>
                {isLoading && <Spinner />}
                {data.map(genre =>
                    <HStack key={genre.id}>
                        <Image
                            borderRadius={8}
                            boxSize='32px'
                            objectFit='cover'
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button whiteSpace="normal" textAlign='left' fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} fontSize='lg' onClick={() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
                    </HStack>


                )}
            </List>
        </>
    )
}

export default GenreList