import React, {
  Component,
  ListView,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import ShoppingItem from './shoppingItem';

const styles = StyleSheet.create({
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

export default class RootComponent extends Component {
  constructor(props) {
    super(props);
    const {shoppingList, add, pick, unPick} = this.props;
  }

  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <ShoppingList
        navigator={navigator}
        shoppingList={route.shoppingList}
        add={route.add}
        pick={route.pick}
        unPick={route.pick} />;
    }
    else if (route.id === 2) {
      return <MasterList
        navigator={navigator}
        shoppingList={route.shoppingList}
        add={route.add} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 1,
          shoppingList: this.props.shoppingList,
          add: this.props.add,
          pick: this.props.pick,
          unPick: this.props.unPick}}
        renderScene={this._renderScene} />
    );
  }
}

let MasterList = React.createClass({
  _handleAddPress(name) {
    this.props.add(name);
  },

  _handleBackPress() {
    this.props.navigator.pop();
  },

  render() {
    const {shoppingList, add, pick} = this.props;

    return (

      <View>
         <View style={styles.toolbar}>

           <TouchableHighlight
             onPress={this._handleBackPress.bind(null, this)}>
             <Text style={styles.toolbarButton}>Back</Text>
           </TouchableHighlight>

           <Text style={styles.toolbarTitle}>Ostos</Text>

           <TouchableHighlight
             onPress={this._handleAddPress.bind(null, 'Bacon')}>
             <Text style={styles.toolbarButton}>Add</Text>
           </TouchableHighlight>

         </View>
      </View>
    );
  }
});

let ShoppingList = React.createClass({

  _handleAddPress(name) {
    // Open add view.
    this.props.navigator.push(
      {
        id: 2,
        add: this.props.add,
        shoppingList: this.props.shoppingList
      }
    );
  },

  _handleEditPress() {
  },

  _handleItemPress(name) {
    // Pick an item.
    this.props.pick(name);
  },

  render() {
    const {shoppingList, add, pick, unPick} = this.props;

    // // Show only such items that are added to the list but not yet picked.
    // let filteredList = shoppingList.filter(item => (item.added === true && item.picked === false));
    // filteredList = filteredList.sort(function(a, b) {
    //   return a.index - b.index;
    // });

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    dataSource = ds.cloneWithRows(shoppingList);

    return (
      <View>

        <View>
           <View style={styles.toolbar}>

             <TouchableHighlight
               onPress={this._handleAddPress.bind(null, this, 'Bacon')}>
               <Text style={styles.toolbarButton}>Add</Text>
             </TouchableHighlight>

             <Text style={styles.toolbarTitle}>Ostos</Text>

             <TouchableHighlight
               onPress={this._handleEditPress.bind(null, this)}>
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
              onPress={this._handleItemPress.bind(null, rowData.name)}
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
});
