import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  // item: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

export default class ShoppingItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, added, picked} = this.props;
    let isAdded = 'false';
    let isPicked = 'false';
    if (picked === true) {
      isPicked = 'true';
    }
    if (added === true) {
      isAdded = 'true';
    }
    return (
      <View>
        <Text>name: {name}, added: {isAdded}, picked: {isPicked}</Text>
      </View>
    );
  }
}
