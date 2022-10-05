import { useEffect, useState } from 'react';
import { getTVShows } from '../api_services/service';
import ListView from '../lists/ListView';
import SelectMovieForm from '../forms/SelectmovieForm';

const selectOptions = [
    ['Airing Today','airing_today'],
    ['On The Air','on_the_air'],
    ['Popular','popular'],
    ['Top Rated','top_rated'],
  ];
const TvShowsScreen= ({ navigation }) => {
      let [tvShows, setTvShows] = useState([]);
      let [listType, setListType] = useState("popular")

      useEffect(() => {
        onTypeChange(listType);
      }, []);

      const onTypeChange = (type) => {
        setListType(type)
        getTVShows(type).then(
          (result) => {
            setTvShows(result);
          },
          (error) => {
            alert('error',`Something went wrong! ${error}`);
          }
        );
      };
      return (
        <>
          <SelectMovieForm onTypeChange={onTypeChange} selectOptions={selectOptions} />
          <ListView list={tvShows} navigation={navigation} listType={listType} />
        </>
      );

};

export default TvShowsScreen;