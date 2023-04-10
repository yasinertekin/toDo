import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  // fixed typo
} from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import Jobcard from "../../components/JobCard/Jobcard";
import Input from "../../components/Input/Input";
import styles from "./List.style";

// A component that displays a list of todos and allows adding new ones
const List = () => {
  // A state variable that stores an array of todo objects
  const [todos, setTodos] = useState([
    { id: "", title: "", done: false, deleted: false },
  ]);
  // A state variable that stores the input value for a new todo
  const [todo, setTodo] = useState("");

  // A hook that runs once when the component mounts
  useEffect(() => {
    // A reference to the todos collection in Firestore
    const todoRef = collection(FIRESTORE_DB, "todos");

    // A function that subscribes to changes in the todos collection
    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        // An array that stores the updated todos
        const updatedTodos = [];
        // Loop through each document in the snapshot
        snapshot.docs.forEach((doc) => {
          // Push the document id and data to the array
          updatedTodos.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        // Set the state variable with the updated todos
        setTodos(updatedTodos);
      },
    });

    // A cleanup function that unsubscribes from the listener
    return () => subscriber();
  }, []);

  // A function that adds a new todo to Firestore
  const addTodo = async () => {
    // Check if the input value is empty
    if (todo === "" || todo === " ") {
      // If so, return early and do nothing
      return;
    }
    // Otherwise, continue with adding a new document
    const doc = await addDoc(collection(FIRESTORE_DB, "todos"), {
      title: todo,
      done: false,
      deleted: false,
    });
    setTodo("");
  };
  const activeTodos = todos.filter((todo) => !todo.deleted);

  const todoCount = activeTodos.length; // get the number of active todos
  // A function that renders a single todo item as a text component
  const renderTodo = ({ item }) => {
    return (
      <Jobcard
        item={item} // pass the item object as a prop
        removeTodo={removeTodo} // pass the removeTodo function as a prop
        longPressTodo={longPressToDo} // pass the longPressTodo function as a prop
      />
    );
  };

  // A function that removes a todo from Firestore by its id
  const removeTodo = async (id) => {
    // Use the doc function to get a reference to the document with the given id in the todos collection
    const todoRef = doc(FIRESTORE_DB, "todos", id);
    // Use the updateDoc function to update the 'deleted' field to true
    await updateDoc(todoRef, {
      deleted: true,
    });
  };

  const longPressToDo = async (id) => {
    const todoRef = doc(FIRESTORE_DB, "todos", id);
    // Use the deleteDoc function to delete the document from Firestore
    deleteDoc(todoRef);
  };

  return (
    <View style={styles.container}>
      <View style={styles.count}>
        <Text style={styles.countText}>Yapılacaklar</Text>
        <Text style={styles.countText}>{todoCount}</Text>
      </View>

      {todos.length > 0 && ( // only render the flat list if there are todos in the array
        <FlatList
          data={todos} // use the state variable as the data source
          renderItem={renderTodo} // use the renderTodo function as the renderItem prop
          keyExtractor={(todo) => todo.id} // use the todo id as the key extractor
        />
      )}
      <View style={styles.input}>
        <Input
          placeholder="Yapılacak..."
          onChangeText={(text) => setTodo(text)}
          value={todo}
          onPress={addTodo}
        />
      </View>
    </View>
  );
};

export default List;
