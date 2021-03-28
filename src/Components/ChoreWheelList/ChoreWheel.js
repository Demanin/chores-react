import { Button, Card, Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import ShowHideButton from 'Components/ChoreWheelList/ChoreWheel/ShowHideButton';
import VisibleTurnList from 'Containers/VisibleTurnList';
import WheelHeader from 'Containers/WheelHeader';
import WheelTurnAdder from 'Containers/WheelTurnAdder';

class ChoreWheel extends Component
{
  render() {
    return (
      <Card className="mt-4">
        <Card.Body>
          <Row>
            <Col xs={9} md={10} style={{minHeight: '40px'}}>
              <WheelHeader
                choreWheel={this.props.choreWheel}
              />
            </Col>
            <Col xs={3} md={2} className="text-right">
              <Button
                variant="danger"
                size="xs"
                onClick={() => this.props.onRemoveWheelClick(this.props.choreWheel.id)}
              >
                <FontAwesomeIcon icon="trash" />
              </Button>
            </Col>
          </Row>

          <VisibleTurnList
            choreWheel={this.props.choreWheel}
          />
        </Card.Body>
        <Card.Footer>
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
        </Card.Footer>
      </Card>
    );
  }
}

ChoreWheel.propTypes = {
  choreWheel: PropTypes.shape({
    id: PropTypes.number,
    turnList: PropTypes.arrayOf(
      PropTypes.shape({ userId: PropTypes.number }),
    ),
    title: PropTypes.shape({
      text: PropTypes.string,
      isEditable: PropTypes.bool,
    }),
    isVisible: PropTypes.bool,
    priority: PropTypes.number,
  }),
  onShowClick: PropTypes.func,
  onHideClick: PropTypes.func,
  onRemoveWheelClick: PropTypes.func,
};

export default ChoreWheel;
