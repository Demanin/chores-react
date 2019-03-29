import React, { Component } from 'react';
import { Well, Row, Col, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

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
        <Well bsSize="sm" style={hasNextTurn ? {marginBottom: '0px'} : {}}>
          <Row>
            <Col xs={6} md={9}>
              <h4 style={{marginTop: '0px', marginBottom: '0px'}}>
                {this.props.turn}
              </h4>
            </Col>
            <Col xs={6} md={3} className="text-right">
              <ButtonGroup>
                <Button
                  bsStyle="success"
                  bsSize="xs"
                  onClick={this.props.onCompleteClick}
                >
                  <Glyphicon glyph="check" />
                </Button>
                <Button
                  bsStyle="warning"
                  bsSize="xs"
                  onClick={this.props.onSkipClick}
                >
                  <Glyphicon glyph="share-alt" />
                </Button>
                <Button
                  bsStyle="danger"
                  bsSize="xs"
                  onClick={this.props.onRemoveClick}
                >
                  <Glyphicon glyph="remove" />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Well>
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
