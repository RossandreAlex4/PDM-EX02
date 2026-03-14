import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { useItemController } from '../controllers/controller';

export const ItemView = () => {

  const { items, dialogVisible, addItem, removeItem, openDialog, closeDialog } = useItemController();
  const [texto, setTexto] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <TouchableOpacity
        onPress={openDialog}
        style={{ backgroundColor: 'red', padding: 10, marginBottom: 20 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Adicione seus personagens favoritos</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <Text>{item.name}</Text>

            <TouchableOpacity
              onPress={() => removeItem(item.id)}
              style={{ backgroundColor: 'red', padding: 5 }}
            >
            <Text style={{ color: 'white' }}>Remover</Text>
            </TouchableOpacity>          
          </View>
          
        )}
      />

      <Modal visible={dialogVisible} transparent={true}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>

          <View style={{ backgroundColor: 'white', padding: 20, width: 250 }}>

            <Text>Nome do personagem:</Text>

            <TextInput
              value={texto}
              onChangeText={setTexto}
              placeholder="Digite o nome"
              style={{ borderWidth: 1, marginTop: 10, marginBottom: 20, padding: 5 }}
            />

            <TouchableOpacity
              onPress={() => {
                if (texto === '') {
                  Alert.alert('Digite um nome');
                } else {
                  addItem(texto);
                  setTexto('');
                }
              }}
              style={{ backgroundColor: 'green', padding: 10, marginBottom: 10 }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={closeDialog}
              style={{ backgroundColor: 'gray', padding: 10 }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>Cancelar</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

    </View>
  );
};