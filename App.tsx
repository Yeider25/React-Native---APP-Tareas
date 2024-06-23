import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderItem from './RenderItem';

export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('tareas-tasks', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('tareas-tasks');
      if (value !== null) {
        const tasksLocal = JSON.parse(value);
        setTasks(tasksLocal);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addTask = async () => {
    const taskExists = tasks.some(task => task.title === text);
    if (taskExists) {
      Alert.alert('Error', 'Ya existe una tarea con ese nombre');
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title: text,
      done: false,
      date: new Date(),
    };
    const tmp = [...tasks];
    tmp.push(newTask);
    setTasks(tmp);
    storeData(tmp);
  };

  const markDone = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
  };

  const deleteFunction = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title);
    tmp.splice(index, 1);
    setTasks(tmp);
    storeData(tmp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestor de Tareas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar nueva tarea"
          onChangeText={(t: string) => setText(t)}
          value={text}
          style={styles.TextInput}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({item}) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
}
