import React from 'react';
import { Box, Flex, Grid, HStack, IconButton, Text,  VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import User from './components/User';
import { Cloudinary } from '@cloudinary/url-gen';

window.Buffer = window.Buffer || require("buffer").Buffer;

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'cookbook-social'
  }
})

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar>
        <Box mr={2}>
          <ConnectButton label='Login With Wallet' />
        </Box>
        <User />
        <ColorModeSwitcher />
      </Navbar>
      <Grid minH="90vh" p={3} spacing={8}>
        <Outlet />
      </Grid>
      <Flex justifyContent="center" alignItems="center" py={4} mb={4}>
        <VStack spacing={4}>
        <Text>2022 Cookbook Social</Text>
        <HStack spacing={4}>
          <Box>
            <IconButton icon={<SiSubstack />} onClick={() => window.open('https://cookbooksocial.substack.com/')} />
          </Box>
          <Box>
            <IconButton icon={<FaTwitter />} onClick={() => window.open('https://twitter.com/cookbook_social')} />
          </Box>
          <Box>
            <IconButton icon={<FaDiscord />} onClick={() => window.open('https://discord.gg/vXSm8f93')} />
          </Box>
        </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default App;
