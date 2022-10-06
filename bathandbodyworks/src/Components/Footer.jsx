import {
  Box,
  FormControl,
  Divider,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputRightAddon,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";

function Footer() {
  return (
    <div>
      <Divider
        marginTop="120px"
        marginBottom="60px"
        height="2px"
        backgroundColor="gray"
      />
      <Box display="flex" justifyContent="space-evenly" marginBottom='100px'>
        <Box>
          <Text fontSize="14">
            Get email offers & the latest news from Bath & Body Works!
          </Text>
          <br />
          <FormControl>
            <FormLabel fontWeight="light" fontSize="14">
              Enter Email
            </FormLabel>
            <Input type="email" borderRadius="none" />
            <FormLabel fontWeight="light" fontSize="14">
              Confirm Email
            </FormLabel>
            <InputGroup>
            <Input type="email" borderRadius="none" />
            <InputRightAddon children='SUBMIT' bg='black' color='white' />
            </InputGroup>
          </FormControl>
          <Text
            marginTop="10px"
            textAlign="start"
            fontWeight="bold"
            fontSize="13"
          >
            GET CONNETCTED
          </Text>
          <Box display="flex">
            <Link
              href="https://www.facebook.com/bathandbodyworks"
              bg="#3460a1"
              marginRight="4"
              height="30px"
              width="30px"
              borderRadius="50%"
            >
              <Image
                height="5"
                width="8"
                marginTop="1.5"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664444782464/images/svg-icons/Social-fb-reverse.svg?yocs=o_s_"
              ></Image>
            </Link>
            <Link
            href="https://twitter.com/bathbodyworks"
              bg="#28aae1"
              marginRight="4"
              height="30px"
              width="30px"
              borderRadius="50%"
            >
              <Image
                height="5"
                width="8"
                marginTop="1.5"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664444782464/images/svg-icons/Social-twitter-reverse.svg?yocs=o_s_"
              ></Image>
            </Link>
            <Link
            href="https://www.instagram.com/bathandbodyworks/"
              bg="#35648b"
              marginRight="4"
              height="30px"
              width="30px"
              borderRadius="50%"
            >
              <Image
                height="5"
                width="8"
                marginTop="1.5"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664444782464/images/svg-icons/Social-twitter-reverse.svg?yocs=o_s_"
              ></Image>
            </Link>
            <Link
            href="https://www.tiktok.com/@bathandbodyworks"
              bg="#000000"
              marginRight="4"
              height="30px"
              width="30px"
              borderRadius="50%"
            >
              <Image
                height="5"
                width="8"
                marginTop="1.5"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664444782464/images/svg-icons/Social-tiktok-reverse.svg?yocs=o_s_"
              ></Image>
            </Link>
            <Link
            href="https://www.youtube.com/user/bathandbodyworks"
              bg="#ee3138"
              marginRight="4"
              height="30px"
              width="30px"
              borderRadius="50%"
            >
              <Image
                height="5"
                width="8"
                marginTop="1.5"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664444782464/images/svg-icons/Social-youtube-reverse.svg?yocs=o_s_"
              ></Image>
            </Link>
            <Link
            href="https://www.pinterest.com/bathbodyworks/"
              bg="#ce2129"
              marginRight="4"
              height="30px"
              width="30px"
              borderRadius="50%"
            >
              <Image
                height="5"
                width="8"
                marginTop="1.5"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664444782464/images/svg-icons/Social-pinterest-reverse.svg?yocs=o_s_"
              ></Image>
            </Link>
          </Box>
        </Box>
        <Box>
          <Text fontSize="14" fontWeight="bold">
            CUSTOMER CARE
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Help & FAQ's
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Shipping
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Returns & Exchanges
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Order Tracking
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Corporate Sales & Gifts
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Contact Us
          </Text>
        </Box>
        <Box>
          <Text fontSize="14" fontWeight="bold">
            MY ACCOUNT
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Sign In or Sign Up
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Order Tracking
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            My Auto Refresh
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            My Love-it List
          </Text>
        </Box>
        <Box>
          <Text fontSize="14" fontWeight="bold">
            DISCOVER
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            About Us
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Careers
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Gift Cards
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Shop by Fragrance
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Product Ingredients
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Get Inspired
          </Text>
          <Text fontWeight="light" marginBottom="5px">
            Equity & Inclusion
          </Text>
        </Box>
        <Box>
          <Text fontSize="14" fontWeight="bold">
            Find Us
          </Text>
          <Text marginBottom="5px" fontWeight="light">
            Store Locator
          </Text>
          <Text marginBottom="5px" fontWeight="light">
            Global Loactions
          </Text>
        </Box>
      </Box>
      <Box bg='#f2f2f2' height='40'>
        <br />
        <Text fontWeight='light' marginBottom='6px'>
        Terms Of Use | Privacy Policy | Security Bug Report States Privacy Rights Notice (Certain States) | Do Not Sell or Share My Personal Information (Certain States) |
        </Text>
        <Text fontWeight='light' marginBottom='15px' >Transparency in Supply Chains |  Targeted Ad Preferences (Certain States) |  Limit the Use of My Sensitive Personal Information (California)</Text>
       <Text fontWeight='light' >© 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</Text>
      </Box>
    </div>
  );
}

export default Footer;
