import { useEffect, useState } from "react";
import { Box, Center, Image, Text } from "native-base";
import { IMAGE_URL } from "../api_config/api";
import { getMovieDetail } from "../api_services/service";

const DetailScreen = ({ navigation, route }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    loadMovieDetails(route.params.id);
  }, []);
  const loadMovieDetails = (type) => {
    getMovieDetail(type, route.params.listType).then(
      (result) => {
        setMovieDetails(result);
      },
      (error) => {
        alert("error", `Something went wrong! ${error}`);
      }
    );
  };
  return (
    <>
      <Box width="100%">
        <Center py={10}>

          <Text
            width="80%"
            textAlign="center"
            fontWeight="bold"
            fontSize={15}
            color="#333"
          >
            {movieDetails.title}
          </Text>
          {movieDetails.poster_path ? (
            <Box mt={5}>
              <Image
                alt="Poster Img"
                height={"250"}
                width={"250"}
                source={{ uri: IMAGE_URL + movieDetails.poster_path }}
              />
            </Box>
          ) : (
            <Box height={"250"} width={"250"}>
              {"no image"}
            </Box>
          )}
          <Box mt={5} ml={5} mr={5} padding={7}>
            <Text textAlign="justify">
              {movieDetails.overview || movieDetails.biography}
            </Text>
          </Box>
          <Box padding={3} textAlign="center">
            <Text fontSize={14} color="gray.600" fontWeight="bold">
              Popularity: {movieDetails.popularity} | Release Date:{" "}
              {movieDetails.release_date}
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
};
export default DetailScreen;
