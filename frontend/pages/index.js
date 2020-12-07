import React from 'react';
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';



export default function Index() {
  return (
    <Container maxWidth="lg">
      <Header/>
      <Box my={4}>
        <h1>Welcome to Word App</h1>
        <Tab />
      </Box>
    </Container>
  );
}