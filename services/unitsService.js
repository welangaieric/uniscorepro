
const { createRecord, readRecord, updateRecord, deleteRecord } = require('./crud');
const getAllunits = async()=>{
    const units = await readRecord('units','*',"");
    console.log('units:', units);
    return units
}

const getunitByCode= async(code)=>{
    const units = await readRecord('units','*',`unitAdm like'%${code}%'`);
    console.log('units:', units);
    return units
}
const addunit = async (lecturerName,unitName,unitCode,lecID)=>{
    const newunit = await createRecord('units', ['lecturerName','unitName','unitCode','lecID'], [lecturerName,unitName,unitCode,lecID]);
    console.log('New unit:', newunit);
    return newunit
}
const updateunit = async(lecturerName,unitName,unitCode,lecID,id)=>{
    const updatedunit = await updateRecord('units', ['lecturerName','unitName','unitCode','lecID'], `id = '${id}'`, [lecturerName,unitName,unitCode,lecID]);
    console.log('Updated unit:', updatedunit);
    return updatedunit
}
const deleteunit = async(id)=>{
      // Delete unit
  const deletedunit = await deleteRecord('units', `id = '${id}' `);
  console.log('Deleted unit:', deletedunit);
  return deletedunit
}
module.exports={getAllunits,addunit,updateunit,deleteunit,getunitByCode}