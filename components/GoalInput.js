
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {

        setEnteredGoal(enteredText);

    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.inputcontainer}>
                <TextInput
                    placeholder="CourseGoal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />

                <View style={styles.buttonContainer}>

                    <View style={styles.buttonCancel}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>

                    <View style={styles.buttonAdd}>
                        <Button title="ADD"
                            //onPress={() => props.onAddGoal(enteredGoal)}
                            onPress={addGoalHandler}
                        />
                    </View>

                </View>

            </View>


        </Modal>
    );
};

export default GoalInput;


const styles = StyleSheet.create({

    inputcontainer: {

        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        margin: 30
        //alignItems: 'center'

    },
    input: {

        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'center'

    },



    buttonAdd: {
        // padding: 50,
        margin: 10

    },
    buttonCancel: {
        // flexDirection: 'column',
        // justifyContent: 'space-evenly',
        margin: 10

    }




});