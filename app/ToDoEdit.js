'use strict';
import React,{
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import t from 'tcomb-form-native';

var Form = t.form.Form;
var ToDo = t.struct({txt: t.Str, complete: t.Bool});

var options = {
  fields: {
    txt: {
      label: 'To-Do Item',
      placeholder: 'enter a to do item here',
      autoFocus: true
    }
  }
};


export default class ToDoEdit extends React.Component {
  constructor() {
    super();
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    var value = this.refs.form.getValue();
    if (value) {
      this.props.update(value, this.props.id);
    }
  }

  render() {
    return (
      <View style={styles.todo}>
        <Form
          ref="form"
          type={ToDo}
          onChange={this._onChange}
          options={options}
          value={this.props.item}/>
        <TouchableHighlight
          style={[styles.button, styles.saveButton]}
          onPress={this.onUpdate}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  button: {
    height: 40,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  saveButton: {
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
  },

  todo: {
    flex: 1,
    padding: 10,
  },
});
