import {
    Button,
    Box,
    HStack,
    Image,
    Heading,
    Text,
    VStack,
  } from 'native-base';
  import { IMAGE_URL } from '../api_config/api'

  const CardView = (props) => {
    const { id, image, title, release_date,navigation, popularity, listType } = props;
    return (
      <Box borderRadius="md">
        <HStack borderBottomWidth={'0.7'} padding="4">
          <Box>
            {image ? (
              <Image
                alt={title}
                height={'100'}
                width={'100'}
                source={{ uri: IMAGE_URL + image }}
              />
            ) : (
              <Box height={'100'} width={'100'}></Box>
            )}
          </Box>
          <VStack pl={6}>
            <Heading 
            size="xs"
            width={200}>
            {title}
            </Heading>
            <Text py={1}>Popularity: {popularity}</Text>
            <Text pb={1}>Release Date: {release_date}</Text>
            <Button
              variant="solid"
              width="100%"
              onPress={() =>
                navigation.navigate('DetailScreen', {
                  id,
                  title,
                  listType,
                })
              }
            >
              More Details
            </Button>
          </VStack>
        </HStack>
      </Box>
    );
  };
  
  export default CardView;
  