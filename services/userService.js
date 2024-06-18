const { createRecord, readRecord, updateRecord, deleteRecord } = require('./crud');
const getAllusers = async(role)=>{
    const users = await readRecord('users','*',`role='${role}'`);
    console.log('Users:', users);
    return users
}
const getuserbyphone = async(phone)=>{
    const users = await readRecord('users','*',`phone='${phone}'`);
    console.log('Users:', users);
    return users
}
const adduser = async (firstName, lastName, phone, email, password, role)=>{
    const newUser = await createRecord('users', ['firstName', 'lastName', 'phone', 'email', 'password', 'role'], [firstName, lastName, phone, email, password, role]);
    console.log('New User:', newUser);
    return newUser
}
const updateuser = async(firstName, lastName, phone, email, password, role,id)=>{
    const updatedUser = await updateRecord('users', ['firstName', 'lastName','phone','email','password'], `id = '${id}'`, [firstName, lastName, phone, email, password, role]);
    console.log('Updated User:', updatedUser);
    return updatedUser
}
const deleteuser = async(id)=>{
      // Delete user
  const deletedUser = await deleteRecord('users', `id = '${id}' `);
  console.log('Deleted User:', deletedUser);
  return deletedUser
}
module.exports={getAllusers,adduser,updateuser,deleteuser,getuserbyphone}