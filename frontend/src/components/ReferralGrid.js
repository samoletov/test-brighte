import React from 'react';
import Table from 'react-bootstrap/Table';

import { getReferrals } from '../services/DataService';

function ItemActions(props) {
  const itemId = props.item.id;
  return itemId ? (
    <span>
      <a href={`#edit${itemId}`}>Edit</a>
      <a href={`#delete${itemId}`}>Delete</a>
    </span>
  ) : (
    'preview'
  );
}
function TableRow(props) {
  const item = props.item;
  const className = props.isSaving ? 'saving' : '';
  return (
    <tr className={className}>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>
        <ItemActions item={item}></ItemActions>
      </td>
    </tr>
  );
}

function ReferralsTable(props) {
  const rows = props.data.map((item) => <TableRow item={item} key={item.id}></TableRow>);
  if (Object.keys(props.newItem).length) {
    rows.push(<TableRow item={props.newItem} key='' isSaving={props.isSaving}></TableRow>);
  }
  return (
    <Table className='Table' striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>Given Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default class ReferralGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ ...this.state, isLoading: true });
    getReferrals()
      .then((response) => {
        this.setState({ isLoading: false });
        this.props.onReferralsLoad(response.data);
      })
      .catch((e) => {
        console.error(e);
        this.setState({ ...this.state, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.isLoading ? 'Fetching referrals...' : ''}</p>
        <ReferralsTable data={this.props.referrals} newItem={this.props.newReferral}></ReferralsTable>
      </div>
    );
  }
}
