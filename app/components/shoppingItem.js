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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  item: {
    borderWidth: 1,
    fontSize: 15,
    padding: 5
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
        <Text style={styles.item}>{name}</Text>
      </View>
    );
  }
}
