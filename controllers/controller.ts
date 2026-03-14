import { useState, useEffect } from 'react';
import { Item } from '../models/Item';
import ItemService from '../services/service';

export const useItemController = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    const allItems = ItemService.getAllItems();
    setItems([...allItems]);
  };

  const addItem = (name: string) => {

    const resultado = ItemService.addItems(name);
    
    if (resultado === "sucesso"){
      loadItems();
      setDialogVisible(false);
    } if (resultado === "nome_repetido") {
      alert("Já existe um personagem com esse nome na lista")
    } if (resultado === "nome_curto") {
      alert("O nome precisa ter pelo menos 2 letras")
    }
  };

  const removeItem = (id: string) =>{
    ItemService.removeItem(id);
    loadItems();
  }

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return {
    items,
    dialogVisible,
    addItem,
    removeItem,
    openDialog,
    closeDialog,
  };
};