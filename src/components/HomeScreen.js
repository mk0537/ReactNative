import { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const HomeScreen = () => {
  const { name, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <View>
      <Text style={{fontSize : 20}}>
        {isLoggedIn ? `Welcome, ${name}` : '로그인을 해주세요'}
      </Text>
      {/* JS에서 false로 판단하는 것들 : false, '', null, undefined, 0, NaN */}
      {isLoggedIn ? (
        <Button title="로그아웃" onPress={logout} />
      ) : (
        <Button title="로그인" onPress={() => login('John Doe')} />
      )}
    </View >
  );
};


export default HomeScreen;