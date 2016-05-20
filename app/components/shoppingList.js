import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import ShoppingItem from './shoppingItem';

const styles = StyleSheet.create({
  button: {},
  item: {
    backgroundColor: '#FFFFFF'
  },
  toolbar: {
    backgroundColor:'#00a3ff',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection:'row'
  },
  toolbarButton:{
    width: 50,
    color: '#ffffff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#ffffff',
    textAlign: 'center',
    flex: 1
  }
});

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  _handleAddPress(name) {
    this.props.add(name);
  }

  _handleEditPress() {

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
           <View style={styles.toolbar}>

             <TouchableHighlight
               onPress={this._handleAddPress.bind(this, 'Bacon')}>
               <Text style={styles.toolbarButton}>Add</Text>
             </TouchableHighlight>

             <Text style={styles.toolbarTitle}>Ostos</Text>

             <TouchableHighlight
               onPress={this._handleEditPress.bind(this)}>
               <Text style={styles.toolbarButton}>Edit</Text>
             </TouchableHighlight>

           </View>
        </View>

        <ListView
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={(rowData) =>

            <TouchableOpacity
              key={rowData.name}
              onPress={this._handleItemPress.bind(this, rowData.name)}
              style={styles.item} >

              <ShoppingItem
                style={styles.item}
                name={rowData.name}
                added={rowData.added}
                picked={rowData.picked} />

            </TouchableOpacity>

          } />

      </View>
    );
  }
}


// <View  style={styles.titleBar}>
//
//   <TextInput
//       style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
//       onChangeText={(text) => this.setState({text})}
//       value={text} />
//
//   <TouchableHighlight
//     onPress={this._handleAddPress.bind(this, 'Bacon')}>
//     <Text>Add</Text>
//   </TouchableHighlight>
// </View>
