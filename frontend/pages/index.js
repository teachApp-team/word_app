import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SimpleTabs from '../components/SimpleTabs'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <h1>Welcome to Word App</h1>
        <SimpleTabs />
      </Box>
    </Container>
  );
}