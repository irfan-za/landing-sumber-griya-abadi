import { supabase } from "@/config/supabase";

// Create a new item
async function createItem(table, data) {
  const { data: newItem, error } = await supabase
    .from(table)
    .insert(data)
    .select();
  if (error) {
    alert(`Error creating item: ${error.message}`);
    return null;
  }
  return newItem;
}

// Select an item by ID
async function getItem(table, id) {
  const { data: selectedItem, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    alert(`Error selecting item: ${error.message}`);
    return null;
  }
  return selectedItem;
}

// Select all items
async function getAll(table) {
  const { data: allItems, error } = await supabase.from(table).select("*");
  if (error) {
    alert(`Error selecting all items: ${error.message}`);
    return null;
  }
  return allItems;
}

// Edit an existing item
async function editItem(table, id, data) {
  const { data: updatedItem, error } = await supabase
    .from(table)
    .update(data)
    .eq("id", id)
    .single();
  if (error) {
    alert(`Error editing item: ${error.message}`);
    return null;
  }
  return updatedItem;
}

// Delete an item by ID
async function deleteItem(table, id) {
  const { data: deletedItem, error } = await supabase
    .from(table)
    .delete()
    .eq("id", id)
    .single();
  if (error) {
    alert(`Error deleting item: ${error.message}`);
    return null;
  }
  return deletedItem;
}

// Select items by column value with filter
async function getItemsWithFilter(table, column, value) {
  const { data: selectedItems, error } = await supabase
    .from(table)
    .select("*")
    .eq(column, value);
  if (error) {
    alert(`Error selecting items with filter: ${error.message}`);
    return null;
  }
  return selectedItems;
}

export {
  createItem,
  getItem,
  getItemsWithFilter,
  getAll,
  editItem,
  deleteItem,
};
