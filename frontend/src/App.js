import './App.css';

import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReferralForm from './components/ReferralForm';
import ReferralGrid from './components/ReferralGrid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleReferralChange = this.handleReferralChange.bind(this);
    this.handleReferralSave = this.handleReferralSave.bind(this);
    this.handleReferralsLoad = this.handleReferralsLoad.bind(this);
    this.state = { referral: {}, referrals: [] };
  }

  handleReferralChange(referral) {
    this.setState({ referral });
  }

  handleReferralSave() {
    const referrals = [...this.state.referrals];
    referrals.push({ ...this.state.referral });
    this.setState({ referral: {}, referrals });
  }

  handleReferralsLoad(referrals) {
    this.setState({ referrals });
  }

  render() {
    return (
      <Container fluid className='App'>
        <Row>
          <Col>
            <ReferralForm
              referral={this.state.referral}
              onReferralChange={this.handleReferralChange}
              onReferralSave={this.handleReferralSave}></ReferralForm>
          </Col>
          <Col>
            <ReferralGrid
              newReferral={this.state.referral}
              referrals={this.state.referrals}
              onReferralsLoad={this.handleReferralsLoad}></ReferralGrid>
          </Col>
        </Row>
      </Container>
    );
  }
}
