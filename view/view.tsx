import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Alert, Image, Dimensions, Button } from 'react-native';
import { useItemController } from '../controllers/controller';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/stackNavigation';
import { useFocusEffect } from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<StackParamList, 'Form'>;
};

export const ItemView = ({navigation}: Props) => {

  const { items, dialogVisible, editItemId, addItem, removeItem, editaItem, openDialog, closeDialog, openEditDialog, loadItems } = useItemController();
  const [texto, setTexto] = useState('');
  const larguraTela = Dimensions.get('screen').width;

  useFocusEffect(
  React.useCallback(() => {
    loadItems();
  }, [])
);

  return (
    <View style={{ flex: 1, padding: 20 }}>
       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
              <Image
                source={require('../assets/person.png')}
                style={{ width: 60, height: 60, marginRight: 10 }}
              />
              <Text style={{ fontSize: larguraTela * 0.08 }}>
                List Maker
              </Text>
            </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Form")}
        style={{ backgroundColor: 'red', padding: 10, marginBottom: 20, borderRadius: 10 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Adicione seus personagens favoritos</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <Text>{item.name}</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
              onPress={() => removeItem(item.id)}
              style={{ backgroundColor: 'red', padding: 5, borderRadius:5 }}
            >
            <Image
              source={require('../assets/trash-can.png')}
              style={{width:20, height:20, tintColor: 'white'}}
            />
            </TouchableOpacity>  
            <TouchableOpacity
              onPress={() => openEditDialog(item.id)}
              style={{ backgroundColor: 'red', padding: 5, borderRadius:5 }}
            >
            <Image
              source={require('../assets/edit.png')}
              style={{width:20, height:20, tintColor: 'white'}}
            />
            </TouchableOpacity>
            </View>        
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
              onPress={() => {{
                  if(editItemId){
                    editaItem(editItemId, texto);
                  }else{
                    addItem(texto);
                  }
                
                }
              }}
              style={{ backgroundColor: 'green', padding: 10, marginBottom: 10 }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>
                {editItemId ? "Salvar edição" : "Adicionar"}
                </Text>
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