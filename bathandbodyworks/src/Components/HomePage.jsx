import { Box, Button, Grid, GridItem, Highlight, Image,  } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { Text, Spacer } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import HorizontalScroller from "react-horizontal-scroll-container"

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Box marginY='20px' marginX='60px' height='600px'  >
        <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwac09c326/images/Fall2022/13503W_fa3_xbxl_16x9.gif?yocs=s_' ></Image>
        </Box>

       <Box display='flex' marginY='20' justifyContent='center' >
        <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} marginRight='40px' bg='black' color='white' borderRadius='none' >SIGN IN</Button>
       <Link to='/SignupLogin'>
       <Button _hover={{ color: 'black',  bg:'#f2f2f2' }}  bg='black' color='white' borderRadius='none'>SIGN UP</Button>
       </Link> 
       </Box>

        <Box paddingTop='20px' marginY='20px' marginX='40px' marginTop='100px' bg='#f2f2f2'width='1200px' height='340px'  >
          <Text fontSize='25px' fontWeight='bold' paddingBottom='5'  >TODAY'S TOP OFFERS</Text>
       <Box style={{cursor:'pointer'}} display='flex' overflow='scroll' >

       <Box paddingTop='40px' marginLeft='20px' bg='white' width='280px' height='220px' >
          <Text marginBottom='5px' fontWeight='bold' fontSize='18' color='#015799' >Today only! Online only!</Text>
          <Text fontSize='14' fontWeight='light' >All 3-Wick Candles</Text>
          <Text fontWeight='bold' >$13.50</Text>
          <br />
          <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' width='80%'  >SHOP</Button>
        </Box>


       <Box paddingTop='40px' marginLeft='20px' bg='white' width='280px' height='220px' >
          <Text marginBottom='5px' fontWeight='bold' fontSize='18' color='#015799' >Ends today! </Text>
          <Text fontSize='14' fontWeight='light' >All 3-Wick Candles</Text>
          <Text fontWeight='bold' >$13.50</Text>
          <br />
          <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' width='80%'  >SHOP</Button>
        </Box>

         <Box paddingTop='40px' marginLeft='20px' bg='white' width='280px' height='220px' >
          <Text marginBottom='5px' fontWeight='bold' fontSize='18' color='#015799' >Limited time only! </Text>
          <Text fontSize='14' fontWeight='light' >All 3-Wick Candles</Text>
          <Text fontWeight='bold' >$25</Text>
          <br />
          <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' width='80%'  >SHOP</Button>
        </Box>

        <Box paddingTop='40px' marginLeft='20px' bg='white' width='280px' height='220px' >
          <Text marginBottom='5px' fontWeight='bold' fontSize='18' color='#015799' >For One Week</Text>
          <Text fontSize='14' fontWeight='light' >All 3-Wick Candles</Text>
          <Text fontWeight='bold' >$13.50</Text>
          <br />
          <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' width='80%'  >SHOP</Button>
        </Box>
      
       </Box>
        </Box>
        <Box marginY='20px' marginX='60px' height='600px'  >
        <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4258464e/images/Fall2022/bc_topshelf-elevated_fa3_hm.jpg?yocs=s_' ></Image>
        </Box>
        <Box marginTop='100px'  height='300px' >
          <Text fontSize='25px' fontWeight='bold' paddingBottom='5'  >SHOP BY CATEGORY</Text>
       <Box  textAlign='center' display='flex' scrollBehavior='auto' >
        <Box  paddingTop='20px' width='240px' height='200px' >
        <Image marginLeft='45px' height='160px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw16b341ca/images/Fall2022/cndl_thankful-toast_fa3_vn%E2%80%8B.jpg?yocs=o_s_'></Image>
          <Text marginLeft='30px' marginTop='10px' decoration='underline' fontWeight='bold' >Body Care</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='15px' width='240px' height='200px' >
        <Image marginLeft='45px' height='170px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw85446105/images/Fall2022/diff_holiday-newness_fa3_vn%E2%80%8B.jpg?yocs=o_s_'></Image>
          <Text marginLeft='30px' decoration='underline' fontWeight='bold' >Candles</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='15px' width='240px' height='200px' >
        <Image marginLeft='45px' height='160px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw16b341ca/images/Fall2022/cndl_thankful-toast_fa3_vn%E2%80%8B.jpg?yocs=o_s_'></Image>
          <Text marginLeft='35px' marginTop='10px' decoration='underline' fontWeight='bold' >Wallflowers</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='15px' width='240px' height='200px' >
        <Image marginLeft='45px' height='160px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5d0a0476/images/Fall2022/sp_thankful-toast_fa3_vn%E2%80%8B.jpg?yocs=o_s_'></Image>
          <Text marginLeft='45px' marginTop='10px' decoration='underline' fontWeight='bold' >Soap</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='15px' width='240px' height='200px' >
        <Image marginLeft='45px' height='160px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw751cc2c2/images/Fall2022/bc_at-presspause_fa3_vn%E2%80%8B%E2%80%8B.jpg?yocs=o_s_'></Image>
          <Text marginLeft='30px' marginTop='10px' decoration='underline' fontWeight='bold' >Aromatherapy</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='15px' width='240px' height='200px' >
        <Image marginLeft='45px' height='160px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8a1239a3/images/Fall2022/bc_new-mensshop_fa3_vn%E2%80%8B.jpg?yocs=o_s_'></Image>
          <Text marginLeft='35px' marginTop='10px' decoration='underline' fontWeight='bold' >Shop Mens's</Text>
        </Box>
       </Box>
        </Box>
      
        <Grid style={{cursor:"pointer"}} templateColumns='repeat(2, 1fr)' gap={12} marginLeft='40px' marginRight='40px'  >
  <GridItem w='100%' h='450'>
    <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw87e16b0d/images/Fall2022/xcat_thankful-toast_fa3_hps.jpg?yocs=o_s_' ></Image>
    <Text>The best way to celerate is with all the new fall things.</Text>
     <Text fontWeight='bold' decoration='underline' >Shop New Arrivals</Text>
  </GridItem>
  <GridItem w='100%' h='450'>
    <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe7929b0b/images/Fall2022/bc_at-presspause_fa3_hps.jpg?yocs=o_s_' ></Image>
    <Text>The best way to celerate is with all the new fall things.</Text>
     <Text fontWeight='bold' decoration='underline' >Shop New Arrivals</Text>
  </GridItem>
  <GridItem w='100%' h='450'>
    <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9a7949c7/images/Fall2022/xcat_mens_fa3_hps.jpg?yocs=o_s_' ></Image>
    <Text>The best way to celerate is with all the new fall things.</Text>
     <Text fontWeight='bold' decoration='underline' >Shop New Arrivals</Text>
  </GridItem>
  <GridItem w='100%' h='450'>
    <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb144b2bc/images/Fall2022/xcat_fall-in-bloom-xcat_fa2_hps.jpg?yocs=o_s_' ></Image>
    <Text>The best way to celerate is with all the new fall things.</Text>
     <Text fontWeight='bold' decoration='underline' >Shop New Arrivals</Text>
  </GridItem>
        </Grid>
        <Box marginY='20px' marginX='60px' marginTop='80px'   >
        <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwda661154/images/Fall2022/xcat_stl-givelove_fa1_hb%E2%80%8B.jpg?yocs=s_' ></Image>
        </Box>
        <Box marginBottom='20px' justifyContent='space-evenly' display='flex' >
        <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' >TOP GIFT PICKS</Button>
        <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' >GIFT SETS</Button>
        <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' >GIFTS UNDER $15</Button>
        <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' >GIFTS UNDER $30</Button>
        <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' >GIFTS FOR HER</Button>
        </Box>
        <Button _hover={{ color: 'black',  bg:'#f2f2f2' }} bg='#333333' color='white' borderRadius='none' >GIFTS FOR EVERYONE</Button>
        <Box marginTop='60px'  height='300px' >
          <Text fontSize='25px' fontWeight='bold' paddingBottom='5'  >SHOP BY CATEGORY</Text>
       <Box  textAlign='center' display='flex' scrollBehavior='auto' >
        <Box  paddingTop='20px' width='240px' height='200px' >
        <Image marginLeft='40px' height='140px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_'></Image>
          <Text marginLeft='30px' marginTop='10px' decoration='underline' fontWeight='bold' >Join the VIP's</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='10px' width='240px' height='200px' >
        <Image marginLeft='40px' height='140px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_'></Image>
          <Text marginLeft='30px' decoration='underline' fontWeight='bold' >Shop—it’s fast, free, easy</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='10px' width='240px' height='200px' >
        <Image marginLeft='40px' height='140px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_'></Image>
          <Text marginLeft='35px' marginTop='10px' decoration='underline' fontWeight='bold' >Sign up for texts</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='10px' width='240px' height='200px' >
        <Image marginLeft='40px' height='140px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_'></Image>
          <Text marginLeft='45px' marginTop='10px' decoration='underline' fontWeight='bold' >Sign up for emails</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='10px' width='240px' height='200px' >
        <Image marginLeft='40px' height='140px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_'></Image>
          <Text marginLeft='30px' marginTop='10px' decoration='underline' fontWeight='bold' >Check out Auto Refresh</Text>
        </Box>
        <Box paddingTop='20px' marginLeft='10px' marginRight='25px' width='240px' height='200px' >
        <Image marginLeft='40px' height='140px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_'></Image>
          <Text marginLeft='35px' marginTop='10px' decoration='underline' fontWeight='bold' >See our return policy</Text>
        </Box>
       </Box>
        </Box>
        <Text></Text>
        <Text marginTop='10px' marginBottom='20px' color='black' fontSize='30' >Bath & Body Works</Text>
        <Text marginBottom='200px' marginLeft='200px' marginRight='200px' >Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect something special a happy-memory-making experience. Searching for new seasonal creations or your favorite discontinued scents? We’ve got you covered there, too. Oh! And while you're browsing, shop our latest & greatest selection of lotions, soaps and candles!</Text>
  <Footer/>
    </div>
  )
}

export default HomePage