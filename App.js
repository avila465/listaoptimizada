import { Button, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import{styles} from './styles'
import { useState } from 'react';

export default function App() {
  const [task,setTask]=useState('');
  const [taskList,setTaskList]=useState([]);
  const [modalVisible,setModalVisible]=useState(false);
  const [selectedTask,setSelectedTask]=useState(null);
  const onHandleTask = () =>{
    setTaskList((prevTaskList)=>[...prevTaskList,{id:Math.random().toString(),value:task}]);
    setTask('');
  }
  const onHandleCancel = () =>{
    setModalVisible(!modalVisible);
  }
  const onHandelSelected =(item)=>{
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  }
  const onHandleDelete = () =>{
    setTaskList((prevTaskList)=>prevTaskList.filter((item)=>item.id!=selectedTask.id))
    setModalVisible(!modalVisible);
  }
  const renderItem=({item})=>(
    <TouchableOpacity key={item.id} style={styles.listItemContainer} onPress={()=>onHandelSelected(item)}>
      <Text style={styles.listItem}>{item.value}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='Ingrese una tarea'
        value={task}
        onChangeText={text=>setTask(text)}
        />
        <Button disabled={!task} title='Add' color='#92bfb1' onPress={onHandleTask}/>
      </View>
      <View style={styles.listContainer}>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item=>item.id.toString()}
      />
      <Modal visible={modalVisible} animationType='fade'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la tarea</Text>
        
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}>Desea eliminar la tarea?</Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button
            title='Cancelar'
            color='#92bfb1'
            onPress={onHandleCancel}
          />
          <Button
            title='Eliminar'
            color='#e82727'
            onPress={onHandleDelete}
          />
        </View>
        </View>
      </Modal>
      </View>
    </View>
  );
}


