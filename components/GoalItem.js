import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            < View style={styles.listItem} >
                <Text >
                    {props.title}
                </Text>
            </View >
        </TouchableOpacity>
    );

}

export default GoalItem;

const styles = StyleSheet.create(
    {
        listItem: {
            flexDirection: 'column',

            width: '100%',
            padding: 10,
            margin: 10,
            backgroundColor: '#ccc',
            borderColor: 'black',
            borderWidth: 1,
            //marginHorizontal: 20,
            height: 50
        }

    }

);