import React from 'react';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

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
    tittle: "Tela Home!!",
    canais: [
      {
        img: 'https://apprecs.org/ios/images/app-icons/256/12/965947410.jpg',
        name: 'SBT',
        description: 'Canal Brasileiro',
        link: 'PXjlrqYxGJM'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/1075436922036764677/W-hc95kG_400x400.jpg',
        name: 'Globo',
        description: 'Canal Brasileiro',
        link: 'FBEsB3ersc8'
      },
      {
        img: 'https://img.ibxk.com.br/2014/4/programas/116119813.png',
        name: 'Record',
        description: 'Canal Brasileiro',
        link: 'NjoxBXXGsDo'
      }
      // {
      //   img: 'http://www.coletiva.net/files/e4da3b7fbbce2345d7772b0674a318d5/midia_foto/20180223/Band-RS_fev18.jpg',
      //   name: 'Band',
      //   description: 'Canal Brasileiro',
      //   link: 'NjboRoRmp94'
      // }
    ]
  }

  async componentDidMount() {

  }

  render() {

    return (
      <Container>
        <StatusBar backgroundColor="orange" />
        {/* <Header /> */}
        <Content padder>
          <List>
            {
              this.state.canais.map(item => {

                return (
                  <ListItem thumbnail key={item.link}>
                    <Left>
                      <Thumbnail square source={{ uri: item.img }} />
                    </Left>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note numberOfLines={1}>{item.description}</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text onPress={() => this.props.navigation.navigate('ViewChannel', item)}>Assistir</Text>
                      </Button>
                    </Right>
                  </ListItem>
                );

              })

            }

          </List>
        </Content>
      </Container>
    )
  }

}
