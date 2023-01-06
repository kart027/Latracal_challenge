
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import dayjs from 'dayjs';






 
const AttendanceSystem = () => {


 
  const[studentData,setstudentData] = useState({RollNumber:"",StudentName:""});
  const[storeData,setstoreData] = useState([]);
  
  function handleChange(e) {
    setstudentData({ ...studentData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e){
    e.preventDefault();

    setstoreData([...storeData, {
            rollNumber: studentData.RollNumber,
            studentName: studentData.StudentName,
            checkInTime: new Date().toString(),
            checkOutTime:null
         
             
                  
          }]);
          setstudentData({RollNumber:"",StudentName:""})

  }
  function addcheckout(rollnuber){
   

        const newdata = storeData.map((i)=>{
          if(i.rollNumber === rollnuber){
            return {...i,checkOutTime:new Date().toString()}
          }
        })

        setstoreData(newdata);

  }

  
  useEffect(() => {
       
      }, [storeData]);

      function formatDate(date) {
        return dayjs(date).format("HH:mm:ss");
      }

   

  return (
    <>
     <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <Box component="form"  onSubmit={handleSubmit} sx={{ display: "flex" }}>
        
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Roll no"
            type="number"
            size="small"
            name="RollNumber"
            variant="outlined"
            required
           value={studentData.RollNumber}
            onChange={handleChange}
           
          />
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="StudentNamae"
            size="small"
            name="StudentName"
            variant="outlined"
            required
           value={studentData.StudentName}
            onChange={handleChange}
            
          />
    
         
            <Button type="submit" variant="contained">
              ADD
            </Button>

           
      
        </Box>
      </CardContent>
    </Card>
   
  
  
    <TableContainer  sx={{marginTop:10}}>
      <Table sx={{ minWidth:400}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>RollNumber</TableCell>
            
            <TableCell align='center'>StudentName</TableCell>
            
            <TableCell align='center'>CheckInTime</TableCell>
              
            <TableCell align='center'>CheckOutTime</TableCell>

            <TableCell align="center">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
              {storeData.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.rollNumber}
                  </TableCell>
                  <TableCell align="center">{row.studentName}</TableCell>
                 
                  <TableCell align="center">{formatDate(row.checkInTime)}</TableCell>

                  {row.checkOutTime==null ? <TableCell align="center">YettoCheckOut</TableCell>:<TableCell align="center">{formatDate(row.checkOutTime)}</TableCell>}
                   
                  {row.checkOutTime==null ? <TableCell align="center">
                  <Button type="submit" variant="contained"  onClick={() => addcheckout(row.rollNumber)}>
                            checkOut
                    </Button >

                   
                  </TableCell>: <TableCell align="center">Alerdy CheckOUt</TableCell>}
                 
                </TableRow>
              ))
              }
          </TableBody>
      </Table>
    </TableContainer>
    
  
    </>
  )
}

export default AttendanceSystem





















