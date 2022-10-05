import { FlatList } from 'native-base';
import CardView from '../listItems/Card';


const ListView = (props) => {
    const { list, navigation, listType } = props;
  
    return (
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <CardView
          id={item.id}
          title={item.title || item.name}
          image={item.poster_path}
          release_date={item.release_date}
          navigation={navigation}
          popularity={item.popularity}
          listType={listType}
        />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    );
  };
  export default ListView;
  