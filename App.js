
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCouseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    //setCouseGoals([...courseGoals, enteredGoal]);
    setCouseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }
  console.log(courseGoals);

  const removeGoalHandler = goalId => {
    setCouseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);

    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (

    <View style={styles.screen}>
      <Button title={"add new Goal"} onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />

    </View >

  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingTop: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',


  }



});
