const { createRecord, readRecord, updateRecord, deleteRecord } = require('./crud');
const getAllLecturers = async()=>{
    const lecturers = await readRecord('lecturers','*',"");
    return lecturers
}
const getLecturersbyphone = async(phone)=>{
    const lecturers = await readRecord('lecturers','*',`phone='${phone}'`);
    return lecturers
}
const addLecturers = async (name, phone, email,lecID)=>{
    const newLecturer = await createRecord('lecturers', ['lecturerName', 'phone', 'email','lecID'], [name, phone, email,lecID]);
    return newLecturer
}
const updateLecturers = async(name, phone, email,lecID,id)=>{
    const updatedLecturer = await updateRecord('lecturers', ['lecturerName', 'phone','email','lecID'], `id = '${id}'`, [name, phone, email,lecID]);
    console.log('Updated Lecturer:', updatedLecturer);
    return updatedLecturer
}
const deleteLecturers = async(id)=>{
      // Delete Lecturer
  const deletedLecturer = await deleteRecord('lecturers', `id = '${id}' `);
  console.log('Deleted Lecturer:', deletedLecturer);
  return deletedLecturer
}
module.exports={getAllLecturers,addLecturers,updateLecturers,deleteLecturers,getLecturersbyphone}