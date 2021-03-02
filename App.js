import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItems from './components/GoalItems'
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals]= useState('');
  const [isAddMode, setIsAddMode]= useState(false);
  
  const addGoalHandher=(goalTitle)=>{
    setCourseGoals(currentGoals => [...currentGoals,  {id:Math.random().toString(),value:goalTitle  }]);
    setIsAddMode(false);
  }
  const removeGoalHandler=goalId=>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=> goal.id !=goalId)
    })
  }
  const cancelGoalAdditionHandler=()=>{
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={()=>setIsAddMode(true)}/>
    <GoalInput visible={isAddMode} onAddGoal={addGoalHandher} onCancel={cancelGoalAdditionHandler}/>
    <FlatList data={courseGoals} renderItem={itemData=>
    <GoalItems id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}/> 
   
    </View>
  );
}

const styles= StyleSheet.create({
  screen:{
    padding:50
  },
  
  

})

