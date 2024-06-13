import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Constructor'};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name: 'Did Mount'});
    }, 2000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({name: 'Did Update'});
    }, 2000);
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({name: 'Will Unmount'});
    }, 2000);
  }

  updateState = () => {
    this.setState({name: 'Update State'});
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>Hello Class</Text>
        <Text style={{fontSize: 30}}>{this.state.name}</Text>
        <Button onPress={this.updateState} title="Update Name" />
      </View>
    );
  }
}

export default Class;
