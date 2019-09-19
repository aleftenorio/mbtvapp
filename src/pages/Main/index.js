import React from 'react';

import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

import {
  View, StyleSheet, Dimensions, StatusBar, Platform
} from 'react-native';


const dimension_height = Dimensions.get('window').height;
const dimension_width = Dimensions.get('window').width;

const deviceios = Platform.OS === 'ios' ? true : false

const styles = StyleSheet.create({
  welcome: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  },
});


export default class Main extends React.Component {

  state = {
    tittle: "Tela Home!!"
  }

  async componentDidMount() {

  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="orange" />
        {/* <Header /> */}
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  {this.state.tittle}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }

}
