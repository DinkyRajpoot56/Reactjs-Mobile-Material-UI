import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
         <Box
         sx={{
          my:15,
          textAlign:'center',
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:'2rem',
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.5rem',
            }
          }

         }}>
          <Typography variant="h4">
            Welcome To My Restaurant
          </Typography>
          <p>
          Fast food is the most widely recognized type of restaurant thanks to franchise chains like Taco Bell, Burger King, and KFC.

Fast food restaurants attract diners because of their price, convenience, and speed. Because of this focus, ingredients in fast food restaurants are usually preheated or precooked (though not always).

Food is then delivered over the counter — or through a drive-thru window — and customers seat themselves.
          </p>
          <br/>
          <p>
          Fast food is the most widely recognized type of restaurant thanks to franchise chains like Taco Bell, Burger King, and KFC.

Fast food restaurants attract diners because of their price, convenience, and speed. Because of this focus, ingredients in fast food restaurants are usually preheated or precooked (though not always).

Food is then delivered over the counter — or through a drive-thru window — and customers seat themselves.
          </p>
         </Box>
    </Layout>
  )
}

export default About