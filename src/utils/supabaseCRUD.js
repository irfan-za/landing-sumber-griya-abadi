import { supabase } from "@/config/supabase";

// Create a new item
async function createItem(table, item) {
  const { data, error } = await supabase.from(table).insert(item).select();
  return { data, error };
}

// Select an item by ID
async function getItem(table, id) {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
}

// Select all items
async function getAll(table) {
  const { data, error } = await supabase.from(table).select("*");
  return { data, error };
}

// Edit an existing item
async function editItem(table, id, item) {
  const { data, error } = await supabase
    .from(table)
    .update(item)
    .eq("id", id)
    .single();
  return { data, error };
}

// Delete an item by ID
async function deleteItem(table, id) {
  const { data, error } = await supabase
    .from(table)
    .delete()
    .eq("id", id)
    .single();
  return { data, error };
}

// Select items by column value with filter
async function getItemsWithFilter(table, column, value) {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq(column, value);
  return { data, error };
}

export {
  createItem,
  getItem,
  getItemsWithFilter,
  getAll,
  editItem,
  deleteItem,
};
