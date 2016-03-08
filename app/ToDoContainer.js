'use strict';
import React,{
    View,
    Text,
    Alert,
    BackAndroid,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoEdit from './ToDoEdit';

export default class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [
            {txt: 'Learn react native', complete: false},
            {txt: 'Make a to-do app', complete: true}
        ]
    };
    this.alertMenu = this.alertMenu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.openItem = this.openItem.bind(this);
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid)
  }

  onBackAndroid = () => {
    const routers = this.props.navigator.getCurrentRoutes();
    if (routers.length > 1) {
      console.log(routers.length);
      this.props.navigator.pop();
      return true;
    }
    return false;
  };

  alertMenu(rowData, rowID) {
      Alert.alert(
          'Quick Menu',
          null,
          [
              {text: 'Delete', onPress: () => this.deleteItem(rowID)},
              {text: 'Edit', onPress: () => this.openItem(rowData, rowID)},
              {text: 'Cancel'}
          ]
      )
  }

  deleteItem(index) {
      var items = this.state.items;
      items.splice(index, 1);
      this.setState({items: items})
  }

  updateItem(item, index) {
      var items = this.state.items;
      if (index) {
          items[index] = item;
      }
      else {
          items.push(item)
      }
      this.setState({items: items});
      this.props.navigator.pop();
  }

  openItem(rowData, rowID) {
      this.props.navigator.push({
          name: rowData && rowData.txt || 'New Item',
          component: ToDoEdit,
          params: {
            item: rowData,
            id: rowID,
            update: this.updateItem
          }
      });
  }

  render() {
      return (
        <View style={{flex:1}}>
          <ToDoList
            items={this.state.items}
            onPressItem={this.openItem}
            onLongPressItem={this.alertMenu}/>
          <TouchableHighlight
            style={[styles.button, styles.newButton]}
            underlayColor='#99d9f4'
            onPress={this.openItem}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
        </View>
      );
  }
}

var styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },

  button: {
    height: 45,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  newButton: {
    marginBottom: 0,
    borderRadius: 0,
  },
});
