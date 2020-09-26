import React from 'react';
import { connect } from 'react-redux';
import './results.css';

const Results = (props) => {
  return (
    <div className="row results-container">
      <p className="results-text">
        Results: <span>{props.mails.length}</span> mail(s)
      </p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    mails: state.mails,
  };
}

export default connect(mapStateToProps)(Results);
