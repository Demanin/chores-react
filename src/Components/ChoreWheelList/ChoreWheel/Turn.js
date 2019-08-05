import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Turn extends Component
{
  render() {
    if (0 >= this.props.turnList.length) {
      return null;
    }

    const hasNextTurn = (2 <= this.props.turnList.length);
    const hasFollowingTurns = (3 <= this.props.turnList.length);

    return (
      <div>
        <Card body size="sm" style={hasNextTurn ? {marginBottom: '0px'} : {}}>
          <Row>
            <Col xs={12} md={9}>
              <h4 style={{marginTop: '0px', marginBottom: '0px'}}>
                {this.props.turnList[0]}
              </h4>
            </Col>
            <Col xs={12} md={3} className="text-right">
              <ButtonGroup>
                <Button
                  variant="success"
                  size="sm"
                  onClick={this.props.onCompleteClick}
                >
                  <FontAwesomeIcon icon="check" />
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={this.props.onSkipClick}
                >
                  <FontAwesomeIcon icon="forward" />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={this.props.onRemoveClick}
                >
                  <FontAwesomeIcon icon="trash" />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Card>
        {hasNextTurn &&
          <div className="text-info well-sm">
            {this.props.turnList[1]}
          </div>
        }
        {hasFollowingTurns &&
          this.props.turnList.slice(2).map((turn, index) =>
            <div className="well-sm" key={index} style={{color: '#aaa'}}>
              {turn}
            </div>
          )
        }
      </div>
    );
  }
}

Turn.propTypes = {
  turnList: PropTypes.arrayOf(PropTypes.string),
  onRemoveClick: PropTypes.func,
  onSkipClick: PropTypes.func,
  onCompleteClick: PropTypes.func,
}

export default Turn;
