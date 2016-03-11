'use strict';
import React,{
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class ToDoListItem extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}>
            <View style={styles.container}>
              <Text style={[styles.txt, item.complete && styles.completed]}>
                {item.txt}
              </Text>
            </View>
          </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 15,
    backgroundColor: '#ffffff',
   },

  txt: {
    fontSize: 20,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
   },

   completed: {
    color: '#cccccc'
  },

  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  }

});
