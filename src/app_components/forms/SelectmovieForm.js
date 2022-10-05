import { useState } from 'react';
import { Center, Select, VStack, FormControl} from 'native-base';

const SelectMovieForm = (props) => {
    let [type, setType] = useState('popular');
    const { onTypeChange, selectOptions } = props;
    const changeType = (type) => {
      onTypeChange(type);
      setType(type);
    };
    return(
<VStack space={3} width="100%" py={6}>
      <FormControl isRequired>
        <Center>
          <Select
            selectedValue={type}
            width="50%"
            _selectedItem={{
              bg: 'teal.500',
            }}
            mt={1}
            onValueChange={(itemValue) => changeType(itemValue)}
          >
            {selectOptions.map((a) => {
              return <Select.Item label={a[0]} value={a[1]} key={a[1]} />;
            })}
          </Select>
        </Center>
      </FormControl>
    </VStack>
    );
};

export default SelectMovieForm