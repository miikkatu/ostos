import React, {Component} from 'react-native';
import {bindActionCreators} from 'redux';
import RootComponent from '../components/shoppingList';
import * as shoppingListActions from '../actions/shoppingListActions';
import {connect} from 'react-redux';

class ShoppingListApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {state, actions} = this.props;
    return (<RootComponent shoppingList={state.shoppingList} {...actions}/>);
  }
}

export default connect(state => ({state: state.shoppingList}), (dispatch) => ({
  actions: bindActionCreators(shoppingListActions, dispatch)
}))(ShoppingListApp);
