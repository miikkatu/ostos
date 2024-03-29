import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import ShoppingItem from './shoppingItem';

const styles = StyleSheet.create({
  button: {},
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10
  },
  title: {
    backgroundColor: '#00a3ff',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    padding: 5
  },
  item: {
    backgroundColor: '#FFFFFF'
  }
});

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  _handleAddPress(name) {
    this.props.add(name);
  }

  _handleItemPress(name) {
    this.props.pick(name);
  }

  render() {
    const {shoppingList, pick, unPick} = this.props;

    // Show only such items that are added to the list but not yet picked.
    let filteredList = shoppingList.filter(item => (item.added === true && item.picked === false));
    filteredList = filteredList.sort(function(a, b) {
      return a.index - b.index;
    });

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    dataSource = ds.cloneWithRows(filteredList);

    return (
      <View style={styles.container}>

        <View>
          <View>
            <Text style={styles.title}>
              Ostos
            </Text>
          </View>
        </View>

        <TouchableHighlight
          onPress={this._handleAddPress.bind(this, 'Bacon')}>
          <Text>Add</Text>
        </TouchableHighlight>

        <ListView
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={(rowData) =>
            <TouchableOpacity
              key={rowData.name}
              onPress={this._handleItemPress.bind(this, rowData.name)}
              style={styles.item}>
          <ShoppingItem
            style={styles.item}
            name={rowData.name}
            added={rowData.added}
            picked={rowData.picked}/>
        </TouchableOpacity>}/>
      </View>
    );
  }
}
