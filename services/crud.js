const db = require('../db');

// Create Function
const createRecord = async (table, columns, values) => {
  try {
    const query = `INSERT INTO ${table} (${columns}) VALUES (?)`;
    const [res] = await db.query(query, [values]);
    return res;
  } catch (err) {
    console.error('Error creating record:', err);
    throw err;
  }
};

// Read Function
const readRecord = async (table, columns, condition , values ) => {
  try {
    let query
    if(condition){
      query = `SELECT ${columns} FROM ${table} WHERE ${condition};`;
    }else{
      query = `SELECT ${columns} FROM ${table} ;`;

    }
    console.log(query)
    const [res] = await db.query(query, values);
    return res;
  } catch (err) {
    console.error('Error reading records:', err);
    throw err;
  }
};

// Update Function 
const updateRecord = async (table, updates, condition, values) => {
  try {
    const setString = updates.map((col) => `${col} = ?`).join(', ');
    const query = `UPDATE ${table} SET ${setString}  WHERE ${condition};`;
    const [res] = await db.query(query,values);
    return res;
  } catch (err) {
    console.error('Error updating record:', err);
    throw err;
  }
};

// Delete Function
const deleteRecord = async (table, condition, values) => {
  try {
    const query = `DELETE FROM ${table} WHERE ${condition}`;
    const [res] = await db.query(query, values);
    return res;
  } catch (err) {
    console.error('Error deleting record:', err);
    throw err;
  }
};

module.exports = {
  createRecord,
  readRecord,
  updateRecord,
  deleteRecord,
};
