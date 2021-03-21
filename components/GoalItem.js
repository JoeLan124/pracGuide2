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
            padding: 10,
            marginVertical: 20,
            backgroundColor: '#ccc',
            borderColor: 'black',
            borderWidth: 1,
            marginHorizontal: 20,
            height: 50
        }

    }

);