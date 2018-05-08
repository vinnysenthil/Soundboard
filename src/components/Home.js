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

import { Image, SectionList, View } from "react-native";

import { SoundSectionList } from "../assets/SoundAssest";
import { connect } from "react-redux";
import { addSound } from "../actions";
import Video from "react-native-video";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  addSound() {
    this.props.addSound();
  }

  render() {
    var { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <SectionList
            renderItem={({ item, index, section }) => {
              return (
                <SectionListItem
                  section={section}
                  item={item}
                  index={index}
                  addSound={this.props.addSound}
                />
              );
            }}
            renderSectionHeader={({ section: { header } }) => {
              return <SectionHeader header={header} />;
            }}
            sections={SoundSectionList}
            keyExtractor={(item, index) => item.title}
          />
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent>
              <Icon type="FontAwesome" name="home" />
              <Text>Home</Text>
            </Button>
            <Button transparent onPress={() => navigate("Library")}>
              <Icon type="MaterialIcons" name="library-music" />
              <Text>library</Text>
            </Button>
            <Button transparent onPress={() => navigate("Search")}>
              <Icon type="FontAwesome" name="search" />
              <Text>Search</Text>
            </Button>
          </FooterTab>
        </Footer>
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

  playSound(urlPassed) {
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
              iconLeft
              transparent
              onPress={this.playSound.bind(this, this.props.item.url)}
            >
              {!this.state.playing && <Icon type="FontAwesome" name="play" />}
              {this.state.playing && <Icon type="FontAwesome" name="pause" />}
            </Button>
          </View>

          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button
              iconLeft
              transparent
              onPress={this.props.addSound.bind(this, this.props.item)}
            >
              <Icon type="Ionicons" name="md-add" />
            </Button>
          </View>

          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button iconLeft transparent>
              <Icon type="Entypo" name="add-to-list" />
            </Button>
          </View>
        </View>
      </ListItem>
    );
  }
}

class SectionHeader extends Component {
  render() {
    return (
      <ListItem itemDivider>
        <Text>{this.props.header}</Text>
      </ListItem>
    );
  }
}

const mapStateToProps = ({ soundData }) => {
  const { sounds } = soundData;
  return { sounds };
};

const mapActionCreators = {
  addSound
};

export default connect(mapStateToProps, mapActionCreators)(Home);
