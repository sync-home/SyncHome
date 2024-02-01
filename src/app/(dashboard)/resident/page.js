export const metadata = {
  title: "Employee",
  description: "This is Employee panel",
};

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdminSidebar from "@/components/ui/AdminSidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dummyData from "../../../../lib/userProfileData";

const drawerWidth = 240;

function ResidentDashboard(props) {
  const { window } = props;

  const residentData = dummyData;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AdminSidebar window={window} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div>
          {residentData ? (
            <div className="w-full flex flex-col lg:flex-row justify-around gap-10 lg:gap-16">
              <Card className="w-1/2">
                <Image
                  src={residentData.image}
                  alt="User Resident Profile Image"
                  width={500}
                  height={300}
                />

                <CardContent>
                  <Typography variant="h5">
                    Name: {residentData.name}
                  </Typography>
                  <Typography variant="body2">
                    Occupation: {residentData.occupation}
                  </Typography>
                  <Typography variant="body2">
                    Email: {residentData.email}
                  </Typography>
                  <Typography variant="body2">
                    Monthly Expenditure: ${residentData.cart}
                  </Typography>
                  <Typography variant="body2">
                    Room Number: {residentData.roomNo}
                  </Typography>
                  <Typography variant="body2">
                    NID: {residentData.nid}
                  </Typography>

                  <Typography variant="h5" className="my-1">
                    Family Members:
                  </Typography>
                  <ul className="flex flex-wrap lg:justify-between items-center">
                    {residentData.familyMembers.map((member, index) => (
                      <li key={index} className="m-1">
                        <Typography>{index + 1}</Typography>
                        <Typography>Name: {member.name}</Typography>
                        <Typography>Age: {member.age}</Typography>
                        <Typography>Gender: {member.gender}</Typography>
                        <Typography>Relations: {member.relations}</Typography>
                        <Typography>Occupation: {member.occupation}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="w-full lg:w-2/3">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 850 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Service</TableCell>
                        <TableCell align="right">Data</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {residentData?.totalCost?.map((data, idx) => (
                        <TableRow key={data.name}>
                          <TableCell component="th" scope="row">
                            {idx + 1}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {data.name}
                          </TableCell>
                          <TableCell align="right">{data.date}</TableCell>
                          <TableCell align="right">${data.cost}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </div>
      </Box>
    </Box>
  );
}

ResidentDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResidentDashboard;
