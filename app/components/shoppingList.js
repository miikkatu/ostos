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
  items: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shoppingList, pick, unpick } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Ostos
        </Text>
        {shoppingList.map(entry =>
          <Text>{entry.name}</Text>
        )}
      </View>
    );
  }
}
