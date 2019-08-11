import { ButtonGroup, Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import FilterButton from 'src/Containers/FilterButton';

class Footer extends Component
{
  render() {
    return (
      <Row>
        <Col md={3} xs={3} style={{fontSize: '1.7em'}}>
          Show:
        </Col>
        <Col md={9} xs={9} className="text-right">
          <ButtonGroup>
            {' '}
            <FilterButton filter='SHOW_ALL'>
              All
            </FilterButton>
            {' '}
            <FilterButton filter='SHOW_VISIBLE'>
              Visible
            </FilterButton>
            {' '}
            <FilterButton filter='SHOW_HIDDEN'>
              Hidden
            </FilterButton>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }
}

export default Footer;
