import visitorManagementimg from '@/assets/rtm/VisitorManagementimg.png'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// import Image from "next/image";
import { getVisitors } from '../utils/getVisitors';

const VisitorManagement = async () => {
  const data = [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "appointmentNo": "A1234",
      "time": "2024-02-07T10:00:00"
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "appointmentNo": "B5678",
      "time": "2024-02-08T14:30:00"
    },
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "appointmentNo": "C91011",
      "time": "2024-02-09T11:15:00"
    },
    {
      "name": "Bob Brown",
      "email": "bob.brown@example.com",
      "appointmentNo": "D121314",
      "time": "2024-02-10T09:45:00"
    },
    {
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "appointmentNo": "E151617",
      "time": "2024-02-11T16:00:00"
    },
    {
      "name": "Michael Wilson",
      "email": "michael.wilson@example.com",
      "appointmentNo": "F181920",
      "time": "2024-02-12T13:20:00"
    },
    {
      "name": "Sophia Martinez",
      "email": "sophia.martinez@example.com",
      "appointmentNo": "G212223",
      "time": "2024-02-13T10:45:00"
    },
    {
      "name": "James Taylor",
      "email": "james.taylor@example.com",
      "appointmentNo": "H242526",
      "time": "2024-02-14T15:30:00"
    },
    {
      "name": "Olivia Thomas",
      "email": "olivia.thomas@example.com",
      "appointmentNo": "I272829",
      "time": "2024-02-15T12:10:00"
    },
    {
      "name": "William Anderson",
      "email": "william.anderson@example.com",
      "appointmentNo": "J303132",
      "time": "2024-02-16T09:00:00"
    }
  ]
  
  return (
    <div>
       <Typography className="text-rode-400 text-2xl pb-5 font-bold pt-5 w-full text-center">VISITOR MANAGEMENT</Typography>
       <p className='my-5 text-justify text-[#3b3a3a]'>Visitor Management in Tourism Destinations provides insight into critical concepts such as the visitor experience, service quality, the uses of indicators and frameworks, and interpretation.
       Requiring all visitors to enter through a single point not only helps visitors know immediately that they are in the right place, but it also ensures that visitors aren't entering restricted areas, or wandering around lost without any assistance.</p>
        <Box className="py-5">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} className='text-center' aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell className='font-semibold text-lg text-center text-[#3b3a3a]'>Name</TableCell>
                  <TableCell className='font-semibold text-lg text-center text-[#3b3a3a]' >Email</TableCell>
                  <TableCell className='font-semibold text-lg text-center text-[#3b3a3a]'>Appointment No</TableCell>
                  <TableCell className='font-semibold text-lg text-center text-[#3b3a3a]'>Time</TableCell>
                </TableRow>
              </TableHead>
              {
                data.map((visitor)=>
              (
                <TableBody>
                <TableRow 
                  key={visitor._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell key={visitor._id} className='font-medium text-center' >{visitor.name}</TableCell>
                  <TableCell className='font-medium text-center' >{visitor.email}</TableCell>
                  <TableCell className='font-medium text-center' >{visitor.appointmentNo}</TableCell>
                  <TableCell className='font-medium text-center'>{visitor.time}</TableCell>
                </TableRow>
              </TableBody>
              )
                )
              }
            </Table>
          </TableContainer>
        </Box>
    </div>
  );
};

export default VisitorManagement;