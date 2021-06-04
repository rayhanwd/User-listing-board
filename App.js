import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Navigationbar from './Navigationbar';
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Navigationbar></Navigationbar>
        <View>
          <Text style={styles.text}>User List</Text>
          {users.map(user => (
            <Card>
              <Card.Title>Name :{user.name}</Card.Title>
              <Text>Email :{user.email}</Text>
              <Text>City :{user.address.city}</Text>
              <Button title="Read more" />
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    textAlign: 'center',
  },
});

export default App;

