import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography,Box, TableContainer, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; 
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import {
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

const Contact = () => {
  return (
    <Layout>
        <Box sx={{ my: 5, ml:10, "& h4": { fontWeight: "bold", mb: 2}}}>
          <Typography variant="h4">
            Contact My Restaurant
          </Typography>
          <p>We’re very approachable and would love to speak to you. Feel free to call, send us an email, or simply complete the inquiry form. You can also review the RodrigoApp’s Restaurant App pricing for the cloud-based SAAS model, how this mobile app for food ordering works for a restaurant business, what is the implementation process, or how much does it cost to build an online ordering app here!</p>
        </Box>
        <Box sx={{
          m:3, 
        width:'400px',
         ml:10, 
         '@media (max-width:600px)':{
          width:"200px",
        }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt:1}}/> 6564467868
                </TableCell>
                </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:'skyblue',pt:1}}/> myfood@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:'green',pt:1}}/> 2832637376
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact