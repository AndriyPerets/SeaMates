// import React, { useState } from 'react';
// import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { realm } from 'realm';
//
// const TodoList = () => {
//   const [todos, setTodos] = useState(realm.objects('TodoItem'));
//   const [inputText, setInputText] = useState('');
//
//   const addTodo = () => {
//     realm.write(() => {
//       realm.create('TodoItem', {
//         id: new Date().getTime(),
//         title: inputText,
//         completed: false,
//       });
//     });
//     setInputText('');
//     setTodos(realm.objects('TodoItem'));
//   };
//
//   const toggleTodo = (todoId: number) => {
//     const todo = realm.objectForPrimaryKey('TodoItem', todoId);
//     realm.write(() => {
//       todo.completed = !todo.completed;
//     });
//     setTodos(realm.objects('TodoItem'));
//   };
//
//   const renderItem = ({ item }: { item: { id: number; title: string; completed: boolean } }) => {
//     return (
//       <TouchableOpacity style={styles.todoItem} onPress={() => toggleTodo(item.id)}>
//         <Text style={[styles.todoTitle, item.completed && styles.completed]}>{item.title}</Text>
//       </TouchableOpacity>
//     );
//   };
//
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList data={todos} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.input} onChangeText={(text) => setInputText(text)} value={inputText} />
//         <TouchableOpacity style={styles.addButton} onPress={addTodo}>
//           <Text style={styles.addButtonText}>+</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };
//
// export default TodoList;
//
//
//     const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   todoItem: {
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   todoTitle: {
//     fontSize: 18,
//   },
//   completed: {
//     textDecorationLine: 'line-through',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 4,
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
//
