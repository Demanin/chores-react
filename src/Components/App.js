import React, { Component } from 'react';
import { PageHeader, Grid } from 'react-bootstrap';
import Footer from './Footer/Footer';
import AddChoreWheel from './ChoreWheelList/AddChoreWheel';
import VisibleList from '../Containers/VisibleList';

class App extends Component
{
  render() {
    return (
      <Grid style={{paddingBottom: '10px'}}>
        <PageHeader>
          House Chores
        </PageHeader>
        <AddChoreWheel />
        <VisibleList />
        <Footer />
      </Grid>
    );
  }
}

export default App;
