import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import TaskList from './src/components/TaskList';
import * as Animatable from 'react-native-animatable'

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {
  const [task, setTask] = useState([
    { key: 1, task: 'Comprar aulas' },
    { key: 2, task: 'Comprar nada' }
  ])
  const [open, setOpen] = useState(false)

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor='#171d31' barStyle='light-content' />

      <View style={styles.content}>
        <Text style={styles.title}>Minha tarefas</Text>
      </View>

      <FlatList
        marginHorizaontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={item => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />}
      />

      <Modal animationType='slide' transparent={false} visible={open} >
        <SafeAreaView style={styles.modal}>

          <View style={styles.madalHeader}>
            <TouchableOpacity onPres={() => setOpen(false)}  >
              <Ionicons style={{marginLeft: 5, marginRight: 5}} name='md-arrow-back' size={40} />
            </TouchableOpacity>
            <Text style={styles.modalTitle} >Nova Tarefa</Text>
          </View>

          <View style={styles.modalBody}>
            <TextInput 
              multiline={true}
              placeholderTextColor="#747474"
              autoCorrect={false}
              placeholder='O que precisa fazer hoje?'
              style={styles.input}
            />

            <TouchableOpacity style={styles.handleAdd}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </Modal>

      <AnimatedBtn style={styles.fab} useNativeDriver animation='bounceInUp' duration={1500} onPress={() => setOpen(true)}>
        <Ionicons name="ios-add" size={35} color='#FFF' />
      </AnimatedBtn>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31',
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }
  },
  modal: {
    flex: 1,
    backgroundColor: '#171d31'
  },
  madalHeader: {
    marginLeft: 10,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 23,
    color: '#fff'
  },
  modalBody: {
    marginTop: 20
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd: {
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText: {
    fontSize: 20,
  }
});
