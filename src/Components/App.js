import React, { Component } from 'react';
import AddChoreWheel from 'src/Containers/AddChoreWheel';
import { Container } from 'react-bootstrap';
import Footer from 'src/Components/Footer/Footer';
import VisibleList from 'src/Containers/VisibleList';

class App extends Component
{
  render() {
    return (
      <Container style={{paddingBottom: '10px'}}>
        <h1 className="pb-2 mt-4 mb-2 border-bottom">
          House Chores
        </h1>
        <AddChoreWheel />
        <VisibleList />
        <Footer />
      </Container>
    );
  }
}

export default App;
