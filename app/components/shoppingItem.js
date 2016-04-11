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
  }
});

export default class ShoppingItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, added, picked} = this.props;
    return (
      <View>
        <Text style={styles.item}>{name}</Text>
      </View>
    );
  }
}
