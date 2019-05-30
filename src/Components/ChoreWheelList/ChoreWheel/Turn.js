import React, { Component } from 'react';
import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Turn extends Component
{
  render() {
    if (!this.props.turn) {
      return null;
    }

    const hasNextTurn = (!!this.props.nextTurn);
    const hasThirdTurn = (!!this.props.thirdTurn);

    return (
      <div>
        <Card body size="sm" style={hasNextTurn ? {marginBottom: '0px'} : {}}>
          <Row>
            <Col xs={6} md={9}>
              <h4 style={{marginTop: '0px', marginBottom: '0px'}}>
                {this.props.turn}
              </h4>
            </Col>
            <Col xs={6} md={3} className="text-right">
              <ButtonGroup>
                <Button
                  variant="success"
                  size="xs"
                  onClick={this.props.onCompleteClick}
                >
                  <FontAwesomeIcon icon="check" />
                </Button>
                <Button
                  variant="warning"
                  size="xs"
                  onClick={this.props.onSkipClick}
                >
                  <FontAwesomeIcon icon="forward" />
                </Button>
                <Button
                  variant="danger"
                  size="xs"
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
            {this.props.nextTurn}
          </div>
        }
        {hasThirdTurn &&
          <div className="well-sm" style={{color: '#aaa'}}>
            {this.props.thirdTurn}
          </div>
        }
      </div>
    );
  }
}

export default Turn;
