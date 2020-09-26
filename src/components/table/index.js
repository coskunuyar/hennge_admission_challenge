import React from 'react';
import TableBody from '../table-body';
import TableHeader from '../table-header';
import DatePicker from '../date-picker';
import NotFound from '../not-found';
import Results from '../results';
import { connect } from 'react-redux';
import './table.css';

const Table = (props) => (
  <div className="container">
    <DatePicker />
    <Results />
    {props.mails.length > 0 && <TableHeader />}
    {props.mails.length > 0 && <TableBody />}
    {props.mails.length === 0 && <NotFound />}
  </div>
);

function mapStateToProps(state) {
  return {
    mails: state.mails,
  };
}
export default connect(mapStateToProps)(Table);
