import { Box, Button, Checkbox, Divider, FormLabel } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';
import { InputRightElement } from '@chakra-ui/react';
import { Spacer } from '@chakra-ui/react';
import Footer  from './Footer';

function SignupLogin() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


  return (
    <div>
        <Navbar/>
        <Box paddingX="40" paddingY="10">
            <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_' ></Image>

        </Box>
        <Text marginBottom="10px" fontSize="22" paddingX="40" align="start">Sign In or Sign Up</Text>
        <Divider backgroundColor="black" orientation='horizontal' />
        <br />
        <br />
      <Box display='flex' justifyContent='space-around' marginRight='100px' marginLeft='130px' >
        <Box display='block' >
        <Text>SIGN IN</Text>
        <br />
        <Text fontSize='15' >If you already have an account with us, sign in below</Text>
        <br />
        <FormLabel fontSize='14'  >Email Address </FormLabel>
        <Input
        pr='4.5rem'
        type='email'
        placeholder='Enter Email'
      />
     <Spacer h='20px' />
     <FormLabel fontSize='14' >Password</FormLabel>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <br />
    <Box display='flex' justifyContent='space-evenly' >
        <Text fontSize='14' decoration='underline' >Forgot Password?</Text>
        <Box display='flex' >
        <Checkbox></Checkbox>
        <Text marginLeft='4px' fontSize='14' >Remember Me</Text>
        </Box>
    </Box>
    <br />
   <Button  borderRadius='none' h='10' bg='#333333'  color='white' _hover='backgroundColor:"red"' fontSize='14' >SIGN IN</Button>
        </Box>
        <Divider orientation='vertical' height='400px' backgroundColor='black' />
        <Box align='center' >
        <Text>SIGN UP</Text>
        <br />
        <Text>Create an account to access the best of your favorite store</Text>
        <br />
       <Image width='350px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_' ></Image>
      <br />
       <Button fontSize='14' borderRadius='none' h='10' bg='#333333' color='white' _hover='backgroundColor:"red"' >CREATE AN ACCOUNT</Button>
        </Box>
      </Box>
      <br />
      <Text fontSize='16' >QUESTION?</Text>
      <Text fontSize='15' >We’re here for you! Call us at 1-800-756-5005.</Text>
      <Footer/>
    </div>
  )
}

export default SignupLogin