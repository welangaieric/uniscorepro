const { createRecord, readRecord, updateRecord, deleteRecord } = require('./crud');
const getAllLecturers = async()=>{
    const lecturers = await readRecord('lecturers','*',"");
    console.log('lecturers:', lecturers);
    return lecturers
}
const getLecturersbyphone = async(phone)=>{
    const lecturers = await readRecord('lecturers','*',`phone='${phone}'`);
    console.log('lecturers:', lecturers);
    return lecturers
}
const addLecturers = async (name, phone, email)=>{
    const newLecturer = await createRecord('lecturers', ['lecturerName', 'phone', 'email'], [name, phone, email]);
    console.log('New Lecturer:', newLecturer);
    return newLecturer
}
const updateLecturers = async(name, phone, email,id)=>{
    const updatedLecturer = await updateRecord('lecturers', ['firstName', 'lastName','phone','email','password'], `id = '${id}'`, [name, phone, email]);
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