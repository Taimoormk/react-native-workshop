import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Headline, Title } from 'react-native-paper';
import * as actions from '../../actions';

class Dashboard extends React.Component {
  state = {
    textInput: '',
  }

  onPressHandler = () => {
    const { textInput } = this.state;
    const { fetchGitHubUser } = this.props;
    fetchGitHubUser(textInput);
  };

  render() {
    const { textInput } = this.state;
    const { loading, user } = this.props;
    return (
      <View>
        <Text>Dashboard</Text>
        <TextInput
          mode="outlined"
          label="Enter GitHub handle"
          autoCapitalize="none"
          value={textInput}
          onChangeText={val => this.setState({ textInput: val })}
        />
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={this.onPressHandler}
        >
          Fetch Repos
        </Button>
        {loading && <Text>Loading...</Text>}
        {
          user && (
            <View>
              <Headline>
                {user.name}
              </Headline>
            </View>
        )}
      </View>
    );
  };
}

const mapStateToProps = ({ userReducer }) => ({
  loading: userReducer.loading,
  user: userReducer.user,
});

const mapDispatchToProps = {
  fetchGitHubUser: actions.fetchGitHubUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
