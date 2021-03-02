import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000',
});

export function getReferrals() {
  return client.get('/referrals');
}

export function createReferral(referral) {
  return client.post('/referrals', referral);
}
