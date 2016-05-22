import React, {Component} from 'react-native';
import {bindActionCreators} from 'redux';
import RootComponent from '../components/shoppingList';
import * as shoppingListActions from '../actions/actions';
import {connect} from 'react-redux';

import {add, pick} from '../actions/actions';

class ShoppingListApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {shoppingList, dispatch} = this.props;
    let boundActionCreators = bindActionCreators(shoppingListActions);
    return (<RootComponent shoppingList={shoppingList} {...boundActionCreators}/>);
  }
}

export default connect(
  state => ({ shoppingList: state.shoppingList })
)(ShoppingListApp);
