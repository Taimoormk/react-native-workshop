import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Headline, Title } from 'react-native-paper';
import * as actions from '../../actions';

class Dashboard extends React.Component {
  state = {
    textInput = '',
  }

  onPressHandler = () => {
    const { textInput } = this.state;
    const { fetchGitHubUserAttempt } = this.props;
    fetchGitHubUserAttempt(textInput);
  };

  render() {
    const { textInput } = this.state;
    const { userdata } = this.props;
    return (
      <View>
        <Text>Dashboard</Text>
        <TextInput
          mode="outlined"
          label="Enter GitHub handle"
          autoCapitalize="none"
          value={textInput}
          style={styles.input}
          onChangeText={val => this.setState({ textInput: val })}
        />
        <Button
          icon="add-a-photo"
          mode="contained"
          color={STYLE_CONSTANTS.COLORS.SECONDARY}
          onPress={this.onPressHandler}
        >
          Fetch Repos
        </Button>
        {
          userdata && (
            <View style={styles.userDataContainer}>
              <View style={styles.avatarContainer}>
                <Image style={styles.userAvatar} source={{ uri: userdata.avatarUrl }} />
              </View>
              <View style={styles.userContainer}>
                <Headline style={styles.userData}>{userdata.name}</Headline>
                <Title style={styles.userData}>{userdata.bio}</Title>
                <Title style={styles.userData}>{userdata.company}</Title>
                <Title style={styles.userData}>{userdata.location}</Title>
              </View>
            </View>
        )}
      </View>
    );
  };
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  fetchGitHubUserAttempt: actions.fetchGitHubUserAttemptAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
