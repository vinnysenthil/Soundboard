import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  CardItem,
  ListItem,
  List,
  Text
} from "native-base";
import { SectionList, FlatList, View } from "react-native";

import { connect } from "react-redux";
import Video from "react-native-video";
import { removeSound } from "../actions";

class Library extends Component {
  static navigationOptions = {
    title: "Library"
  };
  removeSound() {
    this.props.removeSound();
  }
  render() {
    console.log("------------------------------------");
    console.log("library render");
    console.log(this.props.sounds);
    console.log("------------------------------------");
    return (
      <Container>
        <Content>
          <FlatList
            data={this.props.sounds}
            renderItem={({ item, index }) => {
              return (
                <SectionListItem
                  item={item}
                  index={index}
                  removeSound={this.props.removeSound}
                />
              );
            }}
            keyExtractor={(item, index) => item.title}
          />
        </Content>
      </Container>
    );
  }
}

class SectionListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      songUrl: null
    };
  }

  playSoundLib(urlPassed) {
    this.setState({
      songUrl: urlPassed,
      playing: !this.state.playing
    });
  }

  render() {
    return (
      <ListItem>
        {this.state.songUrl && (
          <Video
            source={this.state.songUrl}
            paused={!this.state.playing}
            resizeMode="cover"
          />
        )}

        <Text key={this.props.index}>{this.props.item.title}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button
              transparent
              onPress={this.playSoundLib.bind(this, this.props.item.url)}
            >
              {!this.state.playing && <Icon type="FontAwesome" name="play" />}
              {this.state.playing && <Icon type="FontAwesome" name="pause" />}
            </Button>
          </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button
              transparent
              onPress={this.props.removeSound.bind(this, this.props.index)}
            >
              <Icon type="FontAwesome" name="remove" />
            </Button>
          </View>
        </View>
      </ListItem>
    );
  }
}
const mapStateToProps = ({ soundData }) => {
  const sounds = soundData;
  return { sounds };
};
const mapActionCreators = {
  removeSound
};
export default connect(mapStateToProps, mapActionCreators)(Library);
