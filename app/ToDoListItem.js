'use strict';
import React,{
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-material-design';

export default class ToDoListItem extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <View>
      <Card>
          <Card.Body>
              <Text>{item.txt}</Text>
          </Card.Body>
      </Card>
      </View>
    );
  }
}
