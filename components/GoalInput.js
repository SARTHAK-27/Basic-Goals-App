import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
      };

const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
}

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonconatiner}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
                
            </View>
        </Modal>
        
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
      },
      buttonconatiner : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%'
      },
      button: {
          width: '50%'
      }
});

export default GoalInput;