import React, { useState } from 'react';
import { StyleSheet,Text,View,FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setisAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setisAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add a Goal" onPress={() => setisAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal = {addGoalHandler} onCancel = {cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => ( <GoalItem id={itemData.item.id} ondelete = {removeGoalHandler} title={itemData.item.value} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
