import { Box, Text, Image ,InputGroup, InputLeftElement, InputRightElement,Input, Spacer, color } from "@chakra-ui/react";
import React from "react";
import {SearchIcon} from '@chakra-ui/icons'



function Navbar() {

  function MouseOver(event) {
    event.target.style.textDecoration = '2px solid #005699 underline';
    event.target.style.cursor = 'pointer';
  }
  function MouseOut(event){
    event.target.style.textDecoration="none";
    event.target.style.cursor = '';
  }

  return (
    <Box bg="white" h="180px">
      <Box
        bg="#f2f2f2"
        w="full"
        h="36px"
        display="flex"
        justifyContent="space-between"
        paddingY="1.5"
        paddingX="5"
      >
        <Box display="flex">
          <Text fontSize="13" color="#e22497" paddingX="3" fontWeight="bold">
            POINTS. PERKS. EXCLUSIVES.
          </Text>{" "}
          <Text decoration="underline" fontSize="13">
            Join Rewards!
          </Text>
        </Box>
        <Spacer/>
        <Box display="flex">
          <Image height="6" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664358377366/images/svg-icons/bopis-icon-small.svg?yocs=o_s_"></Image>
          <Text color="#275e99" fontSize="14" paddingX="3" fontWeight="semibold">
            PICK UP IN STORE{" "}
          </Text>{" "}
          <Text decoration="underline" fontSize="14">
            Set Store
          </Text>
        </Box>
        <Box></Box>
      </Box>
      <Box bg="white" h="110px">
        <Box  h="20" bg="white" padding="6" marginLeft="440px" display="flex" >
          <Image
            h="8"
            marginRight="60px"
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw22126b8b/images/svg-icons/Logos-main.svg?yocs=o_s_"
          ></Image>
            <InputGroup width="270px"  >
    <Input  fontSize='15' placeholder='Search by fragrance or product...' width="270px" />
    <InputRightElement children={<SearchIcon color="#005699"/>}/>
  </InputGroup>
  <Image height="35px" marginLeft="22px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw88f6c71d/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"></Image>
  <Image height="35px" marginLeft="30px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1664358377366/images/svg-icons/UI-AddToBag.svg?yocs=o_s_"></Image>
        </Box>
        <Box justifyContent="space-evenly" display="flex" >
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13">TOP OFFERS</Text>
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13">BODY CARE</Text>
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13">CANDLES</Text>
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13">HOME FRAGRANCE</Text>
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13">HAND SOAP & SANITIZERS</Text>
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13">MEN'S SHOP</Text>
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13">GIFTS</Text>
          <Text onMouseOver={MouseOver} onMouseOut={MouseOut} fontSize="13" fontWeight="bold" color="#d6644b">
            FALL SHOP
          </Text>
        </Box>
      </Box>
      <Box bg="#e6f5ff" h="50px">
        <Box display="flex" justifyContent="center" marginTop="1px">
          <Text
            fontSize="18"
            color="#4f96bd"
            paddingY="3"
            paddingX="6"
            fontWeight="bold"
          >
            My Bath Body Works Rewards is now available nationwide!{" "}
          </Text>{" "}
          <Text
            decoration="underline"
            paddingY="4"
            fontSize="14"
            color="#4f96bd"
          >
            JOIN THE VIPS
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
