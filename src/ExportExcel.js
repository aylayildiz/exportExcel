import React from 'react';
import PropTypes from 'prop-types';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';


const ExportExcel=({excelData, fileName})=>{
    const fileType= "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension ='.xlsx';

    const exportToExcel = async () =>{
        const ws= XLSX.utils.json_to_sheet(excelData);
        const wb={ Sheets:{'data': ws}, SheetNames:['data']};
        const excelBuffer = XLSX.write(wb, {bookType: 'xlsx', type:'array'});
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data,fileName + fileExtension);
    }   

    return (
        <>
            
            <button
                onClick={(e)=> exportToExcel(fileName)} 
            >
                Excel
            </button>
        </>
    );

}

ExportExcel.propTypes = {
    excelData: PropTypes.object, 
    fileName: PropTypes.string 
  }

export default ExportExcel;