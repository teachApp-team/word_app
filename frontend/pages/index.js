import React from 'react';
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import Link from 'next/link'


export default function Index() {
  return (
    <Container disableGutters={true}>
      <Header/>
      <Box my={4}>
        <h1>Welcome to Word App</h1>
        <Tab />
      </Box>
      <Link href="/textSelection">
        <a>Go to textSelection page</a>
      </Link>
      <br></br>
      <Link href="/textInfo">
        <a>Go to textInfo page</a>
      </Link>
      <br></br>
      <Link href="/learningCondition">
        <a>Go to learningCondition page</a>
      </Link>
    </Container>
  );
}