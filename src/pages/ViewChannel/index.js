import React from 'react';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import {
    View, StyleSheet, Dimensions, StatusBar, Platform, Image
} from 'react-native';

import YouTube from 'react-native-youtube';


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


export default class Perfil extends React.Component {

    state = {
        tittle: this.props.navigation.getParam('name'),
        link: this.props.navigation.getParam('link')
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('name')
    });


    async componentDidMount() {

    }

    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        const description = navigation.getParam('description');
        //const link = navigation.getParam('link');
        const img = navigation.getParam('img');

        return (
            <Container>
                <StatusBar backgroundColor="orange" />

                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: img }} />
                                <Body>
                                    <Text>{name}</Text>
                                    <Text note>{description}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>


                <YouTube
                    apiKey="AIzaSyA50kgr9q07PTLBLcggxWmaRjPHcnIuWRs"
                    videoId={this.state.link} // The YouTube video ID
                    play // control playback of video with true/false
                    fullscreen // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />

            </Container>




        )
    }

}
