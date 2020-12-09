import React from 'react';
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import TextProgressInfo from '../components/TextInfo/TextProgressInfo'
import SelectLevel from '../components/TextInfo/SelectLevel'
import Link from 'next/link'

export default function Index() {
  return (
    <Container disableGutters={true}>
      <Header/>
      <TextProgressInfo />
      <SelectLevel />
      <Link href="/textSelection">
        <a>Go to textSelection page</a>
      </Link>
      <br></br>
      <Link href="/textInfo">
        <a>Go to textInfo page</a>
      </Link>
    </Container>
  );
}