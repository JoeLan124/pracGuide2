
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {

        setEnteredGoal(enteredText);

    };

    return (


        <View >

            <TextInput style={styles.inputcontainer}
                onChangeText={goalInputHandler}
                value={enteredGoal} />

            <Button title="ADD"
                //onPress={() => props.onAddGoal(enteredGoal)}
                onPress={props.onAddGoal.bind(this, enteredGoal)}
                style={styles.buttonAdd} />

        </View>
    );
};

export default GoalInput;


const styles = StyleSheet.create({

    inputcontainer: {
        //placeholder: 'coursegoal',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 20,
        width: '80%'

    },

    buttonAdd: {
        padding: 30
    },




});