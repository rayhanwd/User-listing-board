import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, ImageBackground, ActivityIndicator} from 'react-native';
import {Card, Button, Header} from 'react-native-elements';
const App = () => {
  const [users, setUsers] = useState([]);
  const image = { uri: "https://wallpaperaccess.com/full/2848838.jpg" };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  if(users.length === 0) return <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#00ff00" /></View>
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'User List', style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
              backgroundColor: 'orangered',
              justifyContent: 'space-around',
              paddingTop: 20,
              paddingBottom: 15
            }}
          />
          
          {users.map((user, index) => (
            <View style={ styles.cardStyle} key={index}>
              <ImageBackground source={image} style={{width: 'auto', height: 'auto', padding: 10}}>
              <Card.Title style={ styles.title}>{user.name}</Card.Title>
              <Text style={ styles.email}>Email: {user.email}</Text>
              <Text style={ styles.address}>Address: {user.address.street}, {user.address.city}</Text>
              <Button title="Read more"/>
              </ImageBackground>
              </View>
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
  cardStyle: {
    borderRadius: 10,
    margin: 15,
    padding: 20,
    borderColor: 'orangered',
    borderWidth: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  email: {
    color: '#336633',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  address: {
    fontSize: 18,
    fontStyle: 'italic', 
    paddingBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;

