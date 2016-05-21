import React, {
  Component,
  Input,
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
    borderColor: '#bebebe',
    borderWidth: 0.5,
    fontSize: 15,
    margin: 1,
    padding: 5,
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row'
  }
});

export default class ShoppingItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, added, picked} = this.props;
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{name}</Text>
      </View>
    );
  }
}
