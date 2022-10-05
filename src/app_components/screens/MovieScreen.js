import { useEffect, useState } from 'react';
import { getMovies } from '../api_services/service';
import SelectMovieForm from '../forms/SelectmovieForm';
import ListView from '../lists/ListView';

const selectOptions = [
  ['Popular', 'popular'],
  ['Now Playing', 'now_playing'],
  ['Top Rated', 'top_rated'],
  ['Upcoming', 'upcoming'],
];
const MovieScreen = ({ navigation }) => {
  let [movies, setMovies] = useState([]);
  let [listType, setListType] = useState("popular")

  useEffect(() => {
    onTypeChange(listType);
  }, []);

  const onTypeChange = (type) => {
    setListType(type)
    getMovies(type).then(
      (result) => {
        setMovies(result);
      },
      (error) => {
        alert('Error', `Something went wrong! ${error}`);
      }
    );
  };
  return (
    <>
       <SelectMovieForm onTypeChange={onTypeChange} selectOptions={selectOptions} /> 
       <ListView list={movies} navigation={navigation} listType={listType} /> 
    </>
  );
};
export default MovieScreen;
