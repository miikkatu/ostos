import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ShoppingItem from './shoppingItem';

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
  item: {
    backgroundColor: '#f92020'
  }
});

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {shoppingList, pick, unPick} = this.props;

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSource = ds.cloneWithRows(shoppingList);

    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Ostos
        </Text>

        <ListView
          dataSource={dataSource}
          renderRow={(rowData) =>

          <TouchableOpacity
            key = {rowData.name}
            onPress={pick}
            style={styles.item}>

            <ShoppingItem
              style={styles.item}
              name = {rowData.name}
              added = {rowData.added}
              picked = {rowData.picked} />

        </TouchableOpacity> }/>
      </View>
    );
  }
}
