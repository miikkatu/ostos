import React, {Component} from 'react-native';
import {bindActionCreators} from 'redux';
import RootComponent from '../components/shoppingList';
import * as shoppingListActions from '../actions/shoppingListActions';
import {connect} from 'react-redux';

class ShoppingListApp extends Component {
  constructor(props) {
    super(props);
debugger;
    // Doesn't work
    this.props.dispatch({
      type: 'ADD',
      name: 'homma'
    });
  }

  componentDidMount() {
    // Injected by react-redux:
    let { dispatch } = this.props;

    // Note: this won’t work:
    // TodoActionCreators.addTodo('Use Redux')

    // You’re just calling a function that creates an action.
    // You must dispatch the action, too!

    // This will work:
    //let action = TodoActionCreators.addTodo('Use Redux');

    dispatch(shoppingListActions);
  }

  render() {
    let {shoppingList, dispatch} = this.props;
    let boundActionCreators = bindActionCreators(shoppingListActions, dispatch);
    return (<RootComponent shoppingList={shoppingList} {...boundActionCreators}/>);
  }
}

export default connect(
  state => ({ shoppingList: state.shoppingList })
)(ShoppingListApp);
