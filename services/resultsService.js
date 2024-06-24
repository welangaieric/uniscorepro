
const { createRecord, readRecord, updateRecord, deleteRecord } = require('./crud');
const getAllResults = async()=>{
    const results = await readRecord('result','*',"");
    // console.log('results:', results);
    return results
}
const getResultByYear = async(year)=>{
    const results = await readRecord('result','*',`academicYear like'%${year}%'`);
    // console.log('results:', results);
    return results
}
const getResultByAdm = async(adm)=>{
    const results = await readRecord('result','*',`studentAdm like'%${adm}%'`);
    // console.log('results:', results);
    return results
}
const getResultRange= async(adm,year,semester)=>{
    const results = await readRecord('result','*',`studentAdm ='${adm}' and academicYear ='${year}' and semester ='${semester}'`);
    // console.log('results:', results);
    return results
}
const addResult = async (studentAdm,unitName,unitCode,Marks,semester,academicYear)=>{
    const newResult = await createRecord('result', ['studentAdm','unitName','unitCode','Marks','semester','academicYear'], [studentAdm,unitName,unitCode,Marks,semester,academicYear]);
    // console.log('New Result:', newResult);
    return newResult
}
const updateResult = async(studentAdm,unitName,unitCode,Marks,semester,academicYear,id)=>{
    const updatedResult = await updateRecord('result', ['studentAdm','unitName','unitCode','Marks','semester','academicYear'], `id = '${id}'`, [studentAdm,unitName,unitCode,Marks,semester,academicYear]);
    console.log('Updated Result:', updatedResult);
    return updatedResult
}
const deleteResult = async(id)=>{
      // Delete Result
  const deletedResult = await deleteRecord('result', `id = '${id}' `);
  console.log('Deleted Result:', deletedResult);
  return deletedResult
}
module.exports={getAllResults,addResult,updateResult,deleteResult,getResultByAdm,getResultRange,getResultByYear}