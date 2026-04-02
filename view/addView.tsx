import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, Image, Dimensions } from 'react-native';
import { useItemController } from '../controllers/controller';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/stackNavigation';
import ItemService from '../services/service';
import { AlertModal } from 'react-native-th-components';

type Props = {
  navigation: NativeStackNavigationProp<StackParamList, 'List'>;
};

export const AddItemView = ({navigation} : Props) => {

  
  const [texto, setTexto] = useState('');
  const larguraTela = Dimensions.get('window').width;
  const [result, setResult] = useState('');

  const handleSave = () => {
    const resultado = ItemService.addItems(texto);
   
  
    if (resultado === "nome_curto") {
      setResult('Digite pelo menos 2 letras');
      setIsOpen(true);
    } else if (resultado === "nome_repetido") {
      setResult('Nome já existe')
      setIsOpen(true);
    } else {
      setTexto('');
      navigation.goBack();
    }
};

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <AlertModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={result}
        buttonText='Fechar'
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
        <Image
          source={require('../assets/person.png')}
          style={{ width: 60, height: 60, marginRight: 10 }}
        />
        <Text style={{ fontSize: larguraTela * 0.08 }}>
          List Maker
        </Text>
      </View>

      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>

        <Text style={{ marginBottom: 10 }}>Nome do personagem:</Text>

        <TextInput
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite o nome"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 20,
            borderRadius: 5
          }}
        />

        <TouchableOpacity
          onPress={handleSave}
          style={{ backgroundColor: 'green', padding: 12, borderRadius: 5, marginBottom: 10 }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {"Adicionar"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: 'gray', padding: 12, borderRadius: 5 }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Cancelar
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};