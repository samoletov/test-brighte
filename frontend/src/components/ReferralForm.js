import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { createReferral } from '../services/DataService';

export default class ReferralForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const referral = { ...this.props.referral };
    referral[event.target.id] = event.target.value;
    this.props.onReferralChange(referral);
  }

  handleSubmit(event) {
    event.preventDefault();
    createReferral(this.props.referral)
      .then((result) => {
        this.props.onReferralChange(result.data);
        this.props.onReferralSave();
      })
      .catch((error) => {
        console.error('Creation error', error);
      });
  }

  render() {
    const referral = this.props.referral;
    return (
      <Form className='Form' onSubmit={this.handleSubmit}>
        <Container>
          <h1>Referral builder</h1>
          <h2>Personal details</h2>
          <Row>
            <Col lg={6} md={12}>
              <Form.Group controlId='firstName'>
                <Form.Label>Given name</Form.Label>
                <Form.Control type='text' value={referral.firstName || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group controlId='lastName'>
                <Form.Label>Surname</Form.Label>
                <Form.Control type='text' value={referral.lastName || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12}>
              <Form.Group controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='text' value={referral.email || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group controlId='phone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='text' value={referral.phone || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <h2>Address</h2>
          <Row>
            <Col lg={6} md={12}>
              <Form.Group controlId='address'>
                <Form.Label>Home name or #</Form.Label>
                <Form.Control type='text' value={referral.address || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group controlId='street'>
                <Form.Label>Street</Form.Label>
                <Form.Control type='text' value={referral.street || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12}>
              <Form.Group controlId='suburb'>
                <Form.Label>Suburb</Form.Label>
                <Form.Control type='text' value={referral.suburb || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group controlId='state'>
                <Form.Label>State</Form.Label>
                <Form.Control type='text' value={referral.state || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12}>
              <Form.Group controlId='postcode'>
                <Form.Label>Postcode</Form.Label>
                <Form.Control type='text' value={referral.postcode || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control type='text' value={referral.country || ''} onChange={this.handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant='outline-secondary' block>
                Upload avatar
              </Button>
            </Col>
            <Col>
              <Button variant='primary' type='submit' block>
                Create referral
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}
