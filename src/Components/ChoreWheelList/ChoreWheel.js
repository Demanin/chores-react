import React, { Component } from 'react';
import VisibleTurnList from '../../Containers/VisibleTurnList';
import ShowHideButton from './ChoreWheel/ShowHideButton';
import WheelHeader from '../../Containers/WheelHeader';
import WheelTurnAdder from '../../Containers/WheelTurnAdder';
import { Panel, Button, Glyphicon, Row, Col } from 'react-bootstrap';

class ChoreWheel extends Component
{
  componentDidUpdate()
  {
    const { id, turnList, title, isVisible } = this.props.choreWheel;

    if (title.text === '') {
      return;
    }

    return fetch(
        '/api/wheels/' + id,
        {
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            turnList,
            title: title.text,
            isVisible
          }),
          method: 'POST'
        }
      )
      .then(res => res.json())
      .then(
        (result) => {},
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <Panel>
        <Panel.Body>
          <Row>
            <Col xs={9} md={10} style={{minHeight: '40px'}}>
              <WheelHeader
                id={this.props.choreWheel.id}
                title={this.props.choreWheel.title}
              />
            </Col>
            <Col xs={3} md={2} className="text-right">
              <Button
                bsStyle="danger"
                bsSize="xs"
                onClick={() => this.props.onRemoveWheelClick(this.props.choreWheel.id)}
              >
                <Glyphicon glyph="remove" />
              </Button>
            </Col>
          </Row>

          <VisibleTurnList
            choreWheel={this.props.choreWheel}
          />
        </Panel.Body>
        <Panel.Footer>
          <Row>
            <Col xs={9} md={10}>
              <WheelTurnAdder
                choreWheel={this.props.choreWheel}
              />
            </Col>
            <Col xs={3} md={2} className="text-right">
              <ShowHideButton
                onShowClick={this.props.onShowClick}
                onHideClick={this.props.onHideClick}
                choreWheel={this.props.choreWheel} />
            </Col>
          </Row>
        </Panel.Footer>
      </Panel>
    );
  }
}

export default ChoreWheel;
