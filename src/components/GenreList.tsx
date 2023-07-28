import { Button, HStack, Heading, Image, List, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();
    return (
        <>
            <Heading fontSize='xl' my={7} >Genres</Heading>
            <List spacing={3} paddingX={2}>
                {isLoading && <Spinner />}
                {data?.results.map(genre =>
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