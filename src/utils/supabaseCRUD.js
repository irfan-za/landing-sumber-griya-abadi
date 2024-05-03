import { supabase } from '../config/supabase';

// Create a new item
async function createItem(table, data) {
  const { data: newItem, error } = await supabase.from(table).insert(data);
  if (error) {
    console.error('Error creating item:', error);
    return null;
  }
  return newItem;
}

// Select an item by ID
async function getItem(table, id) {
  const { data: selectedItem, error } = await supabase.from(table).select('*').eq('id', id).single();
  if (error) {
    console.error('Error selecting item:', error);
    return null;
  }
  return selectedItem;
}

// Select all items
async function getAll(table) {
  const { data: allItems, error } = await supabase.from(table).select('*');
  if (error) {
    console.error('Error selecting all items:', error);
    return null;
  }
  return allItems;
}

// Edit an existing item
async function editItem(table, id, data) {
  const { data: updatedItem, error } = await supabase.from(table).update(data).eq('id', id).single();
  if (error) {
    console.error('Error editing item:', error);
    return null;
  }
  return updatedItem;
}

// Delete an item by ID
async function deleteItem(table, id) {
  const { data: deletedItem, error } = await supabase.from(table).delete().eq('id', id).single();
  if (error) {
    console.error('Error deleting item:', error);
    return null;
  }
  return deletedItem;
}

export {
  createItem,
  getItem,
  getAll,
  editItem,
  deleteItem,
};