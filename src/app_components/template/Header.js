import { Box, StatusBar, Text, HStack } from 'native-base';


const Header = () =>{
    return (
        <>
        <StatusBar background="#374f67" barStyle="light-content" />
        <Box safeAreaTop backgroundColor="374f67">
            <HStack
              px={1}
              py={3}
              alignItems="center"
              bg="#374f67"
              justifyContent="center">
                <Text color="#fff" fontSize={20} fontWeight="bold">
                    Movies App
                </Text>
            </HStack>
        </Box>
        </>
    );
};
export default Header;