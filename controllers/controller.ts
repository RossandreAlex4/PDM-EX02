import { useState, useEffect } from 'react';
import { Item } from '../models/Item';
import ItemService from '../services/service';

export const useItemController = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    const allItems = ItemService.getAllItems();
    setItems([...allItems]);
  };

  const addItem = (name: string) => {
    const resultado = ItemService.addItems(name);
      if (resultado === "sucesso") {
        loadItems();
      }
  return resultado; 
};

  const removeItem = (id: string) =>{
    ItemService.removeItem(id);
    loadItems();
  }

  const editaItem = (id: string, name: string) => {
    const resultado = ItemService.editaItem(id, name);
    
    if (resultado === "sucesso") {
      loadItems();
    }

  return resultado; 
};

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setEditItemId(null)
  };

  const openEditDialog = (id:string) => {
    setEditItemId(id);
    setDialogVisible(true);
  }

  const closeEditDialog = () => {
    setDialogVisible(false);
    setEditItemId(null);
  }

  return {
    items,
    dialogVisible,
    editItemId,
    addItem,
    removeItem,
    openDialog,
    closeDialog,
    editaItem,
    openEditDialog,
    closeEditDialog,
    loadItems
    
  };
};