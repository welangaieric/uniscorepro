const { createRecord, readRecord, updateRecord, deleteRecord } = require('./crud');
const getAllstudent = async()=>{
    const student = await readRecord('students','*',"");
    // console.log('student:', student);
    return student
}
const getstudentbyphone = async(phone)=>{
    const student = await readRecord('students','*',`phone='${phone}'`);
    // console.log('student:', student);
    return student
}
const addstudent = async (studentName,course, year,semester,stdAdm,phone)=>{
    const newstudent = await createRecord('students', ['studentName','course', 'year','semester','stdAdm','phone'], [studentName,course, year,semester,stdAdm,phone]);
    // console.log('New student:', newstudent);
    return newstudent
}
const updatestudent = async(studentName,course, year,semester,stdAdm,phone,id)=>{
    const updatedstudent = await updateRecord('students',['studentName','course', 'year','semester','stdAdm','phone'], `id = '${id}'`, [studentName,course, year,semester,stdAdm,phone]);
    console.log('Updated student:', updatedstudent);
    return updatedstudent
}
const deletestudent = async(id)=>{
      // Delete student
  const deletedstudent = await deleteRecord('students', `id = '${id}' `);
  console.log('Deleted student:', deletedstudent);
  return deletedstudent
}
module.exports={getAllstudent,addstudent,updatestudent,deletestudent,getstudentbyphone}