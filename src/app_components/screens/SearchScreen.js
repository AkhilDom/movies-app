import {
  Box,
  Button,
  Icon,
  Input,
  Select,
  Center,
  FormControl,
  HStack,
  Text,
  VStack,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {  useState } from 'react';
import { getMovieSearchResults } from '../api_services/service';
import ListView from '../lists/ListView';

const SearchScreen = ({ navigation }) => {
    let [searchResult, setSearchResult] = useState('');
    let [searchQuery, setSearchQuery] = useState('');

    let [type, setType] = useState('movie');
    let [errorStyle, setErrorStyle] = useState([]);
    let [errorMsg, setErrorMsg] = useState('');
    
    const onSearchClick = () => {
      if ('' === searchQuery) {
        setErrorStyle([{ borderColor: 'red', borderWidth: 1 }]);
        setErrorMsg('Movie/TV show name is required');
        setSearchResult('')
      }else {
        setErrorStyle([]);
        setErrorMsg('');
          getMovieSearchResults(searchQuery, type).then(
            (result) => {
              setSearchResult(result);
            },
            (error) => {
              alert('Error', `Something went wrong! ${error}`);
            }
          );
    }
      };

    return (
        <>
        <VStack space={2} width="100%" py={5}>
      <FormControl isRequired>
        <Center>
          <VStack>
            <Text pb={2}>Search Movie/TV Show Name*</Text>
            <Box style={errorStyle}>
              <Input
                placeholder="i.e. James Bond, CSI"
                variant="filled"
                bg="gray.200"
                px={3}
                width="100%"
                InputLeftElement={
                  <Icon
                    size={5}
                    ml={2}
                    color="gray.400"
                    as={<Ionicons name="ios-search" />}
                  />
                }
                onChangeText={(value) => {
                  setSearchQuery(value);
                }}
              />
            </Box>
            <Text pt={2}>Choose Search Type*</Text>
            <HStack width="100%" space={2} pt={2}>
              <Select
                selectedValue={type}
                width={200}
                _selectedItem={{
                  bg: 'teal.600',
                }}
                mt={1}
                onValueChange={(itemValue) => setType(itemValue)}
              >
                <Select.Item label="Movie" value="movie" />
                <Select.Item label="Multi" value="multi" />
                <Select.Item label="TV" value="tv" />
              </Select>
              <Button
                width={'30%'}
                height={10}
                mt={3}
                onPress={onSearchClick}
                startIcon={<Icon as={Ionicons} name="ios-search" />}
              >
                Search
              </Button>
            </HStack>
            <Text style={[{ color: 'red' }]}>{errorMsg}</Text>
          </VStack>
        </Center>
      </FormControl>
    </VStack>
          {searchQuery && searchResult ? (
            <ListView list={searchResult} navigation={navigation} />
          ) : (
            <Center>
              <Text fontSize={20} color={'#444'} fontWeight="bold" >
                Please Initiate a search
              </Text>
            </Center>
          )}
        </>
      );
}
export default SearchScreen;